<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { getRecipe } from '$lib/api';
	import { appState } from '$lib/storage.svelte';
	import type { Recipe } from '$lib/types';

	let recipe = $state<Recipe | null>(null);
	let loading = $state(true);
	let error = $state('');

	let instructionParagraphs = $derived(
		recipe
			? recipe.instructions
					.split('\n')
					.map((paragraph) => paragraph.trim())
					.filter(Boolean)
			: []
	);

	onMount(() => {
		void loadRecipe();
	});

	async function loadRecipe() {
		loading = true;
		error = '';

		try {
			if (page.params.source === 'user') {
				recipe =
					appState.customRecipes.find(
						(item) => item.id === page.params.id
					) ?? null;
			} else {
				recipe = await getRecipe(page.params.id ?? '');
			}

			if (!recipe) {
				error = 'Recipe not found.';
			}
		} catch (caughtError) {
			console.error('Failed to load recipe:', caughtError);
			error = 'Unable to load this recipe.';
		} finally {
			loading = false;
		}
	}

	function toggleFavorite() {
		if (recipe) {
			appState.toggleFavorite(recipe);
		}
	}
</script>

<svelte:head>
	<title>
		{recipe ? `${recipe.title} | Recipe Planner` : 'Recipe Details | Recipe Planner'}
	</title>

	<meta
		name="description"
		content={recipe
			? `View ingredients and instructions for ${recipe.title}.`
			: 'View recipe ingredients and cooking instructions.'}
	/>
</svelte:head>

{#if loading}
	<div class="status" aria-live="polite">
		<p>Loading recipe...</p>
	</div>
{:else if error}
	<div class="status error-status" role="alert">
		<h1>Recipe unavailable</h1>
		<p>{error}</p>

		/recipes
			<a class="back-link" href="/recipes">Return to recipes
		</a>
	</div>
{:else if recipe}
	<article class="recipe-details">
		/recipes
		<a class="back-link" href="/recipes">&lt;- Back to recipes
		</a>

		<header class="recipe-header">
			<div>
				<p class="eyebrow">Recipe details</p>
				<h1>{recipe.title}</h1>

				<div class="metadata">
					{#if recipe.category}
						<span>{recipe.category}</span>
					{/if}

					{#if recipe.area}
						<span>{recipe.area}</span>
					{/if}

					<span>
						{recipe.source === 'user'
							? 'My recipe'
							: 'Public recipe'}
					</span>
				</div>
			</div>
		</header>

		{#if recipe.imageUrl}
			<img class="detail-img" src={recipe.imageUrl} alt={recipe.title} />
		{/if}

		<div class="recipe-actions">
			<button
				class="button"
				type="button"
				aria-pressed={appState.isFavorite(recipe.id)}
				onclick={toggleFavorite}
			>
				{appState.isFavorite(recipe.id)
					? 'Remove from favorites'
					: 'Add to favorites'}
			</button>

			{#if recipe.source === 'user'}
				{`/my-recipes/${recipe.id}/edit`}
				<a class="secondary-button" href={`/my-recipes/${recipe.id}/edit`}>
					Edit recipe
				</a>
			{/if}
		</div>

		<div class="details">
			<section class="ingredients-card">
				<h2>Ingredients</h2>

				{#if recipe.ingredients.length > 0}
					<ul class="ingredient-list">
						{#each recipe.ingredients as ingredient}
							<li>
								<span class="measure">
									{ingredient.measure || 'As needed'}
								</span>

								<span class="ingredient-name">
									{ingredient.name}
								</span>
							</li>
						{/each}
					</ul>
				{:else}
					<p>No ingredients were provided for this recipe.</p>
				{/if}
			</section>

			<section class="instructions-card">
				<h2>Instructions</h2>

				{#if instructionParagraphs.length > 0}
					<ol class="instruction-list">
						{#each instructionParagraphs as paragraph}
							<li>{paragraph}</li>
						{/each}
					</ol>
				{:else}
					<p>No instructions were provided for this recipe.</p>
				{/if}
			</section>
		</div>
	</article>
{/if}

<style>
	.recipe-details {
		display: grid;
		gap: 22px;
	}

	.back-link {
		display: inline-flex;
		width: fit-content;
		align-items: center;
		color: #176b45;
		font-weight: 700;
		text-decoration: none;
	}

	.back-link:hover {
		text-decoration: underline;
	}

	.back-link:focus-visible {
		border-radius: 4px;
		outline: 3px solid #8acbb0;
		outline-offset: 4px;
	}

	.recipe-header h1 {
		margin: 4px 0 12px;
		color: #173d29;
		font-size: clamp(2rem, 5vw, 3.8rem);
		line-height: 1.08;
	}

	.eyebrow {
		margin: 0;
		color: #197149;
		font-size: 0.9rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.metadata {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.metadata span {
		border: 1px solid #c7d9cd;
		border-radius: 999px;
		background: #eef7f1;
		padding: 6px 11px;
		color: #315c45;
		font-size: 0.9rem;
		font-weight: 650;
	}

	.detail-img {
		display: block;
		width: 100%;
		max-height: 480px;
		border-radius: 24px;
		object-fit: cover;
		box-shadow: 0 12px 30px rgb(23 61 41 / 12%);
	}

	.recipe-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		align-items: center;
	}

	.button,
	.secondary-button {
		display: inline-flex;
		min-height: 44px;
		align-items: center;
		justify-content: center;
		border-radius: 10px;
		padding: 10px 16px;
		font: inherit;
		font-weight: 750;
		text-decoration: none;
		cursor: pointer;
	}

	.button {
		border: 1px solid #197149;
		background: #197149;
		color: white;
	}

	.secondary-button {
		border: 1px solid #a9c3b2;
		background: white;
		color: #176b45;
	}

	.button:hover {
		background: #125f3d;
	}

	.secondary-button:hover {
		background: #eef7f1;
	}

	.button:focus-visible,
	.secondary-button:focus-visible {
		outline: 3px solid #8acbb0;
		outline-offset: 3px;
	}

	.details {
		display: grid;
		grid-template-columns: minmax(260px, 1fr) minmax(0, 2fr);
		gap: 24px;
		align-items: start;
	}

	.ingredients-card,
	.instructions-card {
		border: 1px solid #d8e5dc;
		border-radius: 18px;
		background: white;
		padding: 22px;
		box-shadow: 0 8px 24px rgb(23 61 41 / 6%);
	}

	.ingredients-card h2,
	.instructions-card h2 {
		margin-top: 0;
		color: #173d29;
	}

	.ingredient-list {
		display: grid;
		gap: 0;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.ingredient-list li {
		display: grid;
		grid-template-columns: minmax(90px, 0.8fr) minmax(120px, 1.2fr);
		gap: 12px;
		border-bottom: 1px solid #e6eee8;
		padding: 11px 0;
	}

	.ingredient-list li:last-child {
		border-bottom: 0;
	}

	.measure {
		color: #5c7265;
		font-size: 0.95rem;
	}

	.ingredient-name {
		color: #173d29;
		font-weight: 700;
	}

	.instruction-list {
		display: grid;
		gap: 16px;
		margin: 0;
		padding-left: 24px;
	}

	.instruction-list li {
		padding-left: 7px;
		color: #294c39;
		line-height: 1.7;
	}

	.status {
		border-radius: 15px;
		background: #eef5f0;
		padding: 25px;
	}

	.error-status {
		border: 1px solid #e4bcbc;
		background: #fff4f4;
	}

	.error-status h1 {
		margin-top: 0;
		color: #7e2020;
	}

	@media (max-width: 700px) {
		.details {
			grid-template-columns: 1fr;
		}

		.detail-img {
			max-height: 350px;
			border-radius: 18px;
		}

		.ingredients-card,
		.instructions-card {
			padding: 17px;
		}

		.ingredient-list li {
			grid-template-columns: 1fr;
			gap: 3px;
		}
	}
</style>



