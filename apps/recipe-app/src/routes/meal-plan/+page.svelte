<script lang="ts">
	import { onMount } from 'svelte';
	import { appState } from '$lib/storage.svelte';
	import { registerStencil } from '$lib/stencil';
	import type { Day, Recipe } from '$lib/types';

	const days: Day[] = [
		'monday',
		'tuesday',
		'wednesday',
		'thursday',
		'friday',
		'saturday',
		'sunday'
	];

	let selected = $state<Day | null>(null);

	let options = $derived([
		...appState.favorites,
		...appState.customRecipes.filter(
			(customRecipe) =>
				!appState.favorites.some(
					(favorite) => favorite.id === customRecipe.id
				)
		)
	]);

	onMount(() => {
		void registerStencil();
	});

	function mealEvents(node: HTMLElement, day: Day) {
		const handleChoose = () => {
			selected = day;
		};

		const handleRemove = () => {
			appState.setMeal(day, null);
		};

		node.addEventListener('chooseMeal', handleChoose);
		node.addEventListener('removeMeal', handleRemove);

		return {
			destroy() {
				node.removeEventListener('chooseMeal', handleChoose);
				node.removeEventListener('removeMeal', handleRemove);
			}
		};
	}

	function modalEvents(node: HTMLElement & { open?: boolean }) {
		const handleClose = () => {
			selected = null;
		};

		node.addEventListener('modalClosed', handleClose);

		$effect(() => {
			node.open = selected !== null;
		});

		return {
			destroy() {
				node.removeEventListener('modalClosed', handleClose);
			}
		};
	}

	function pickRecipe(recipe: Recipe) {
		if (!selected) {
			return;
		}

		appState.setMeal(selected, recipe);
		selected = null;
	}
</script>

<h1>Weekly meal plan</h1>

<p>
	Choose from your favorites and custom recipes.
	One recipe can be assigned to each day.
</p>

<div class="planner">
	{#each days as day}
		<meal-day
			use:mealEvents={day}
			day={day}
			recipe-title={appState.mealPlan[day]?.title ?? ''}
			image-url={appState.mealPlan[day]?.imageUrl ?? ''}
		></meal-day>
	{/each}
</div>

<app-modal use:modalEvents>
	<h2 slot="header">
		Choose a recipe
		{#if selected}
			for {selected}
		{/if}
	</h2>

	{#if options.length > 0}
		<div class="choices">
			{#each options as recipe (recipe.id)}
				<button
					type="button"
					onclick={() => pickRecipe(recipe)}
				>
					{#if recipe.imageUrl}
						<img src={recipe.imageUrl} alt="" />
					{/if}

					<span>{recipe.title}</span>
				</button>
			{/each}
		</div>
	{:else}
        <p>
            Add some <a href="/favorites">favorites</a>
            or
            <a href="/my-recipes/new">create a recipe</a>
            first.
        </p>
    {/if}

</app-modal>

<style>
	.planner {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 14px;
	}

	.choices {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 10px;
	}

	.choices button {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 10px;
		border: 1px solid #c9d8ce;
		border-radius: 10px;
		background: white;
		text-align: left;
		cursor: pointer;
	}

	.choices button:hover {
		background: #eef7f1;
	}

	.choices button:focus-visible {
		outline: 3px solid #8acbb0;
		outline-offset: 2px;
	}

	.choices img {
		width: 60px;
		height: 60px;
		object-fit: cover;
		border-radius: 8px;
	}

	@media (max-width: 600px) {
		.planner,
		.choices {
			grid-template-columns: 1fr;
		}
	}
</style>
