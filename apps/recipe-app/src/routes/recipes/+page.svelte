<script lang="ts">
	import { onMount } from 'svelte';
	import {
		searchRecipes,
		filterByCategory,
		getCategories
	} from '$lib/api';
	import RecipeCard from '$lib/RecipeCard.svelte';
	import { registerStencil } from '$lib/stencil';
	import type { Recipe } from '$lib/types';

	let recipes = $state<Recipe[]>([]);
	let categories = $state<string[]>([]);
	let loading = $state(true);
	let error = $state('');
	let search: HTMLElement & {
		categories?: string[];
	};

	async function run(query = '', category = '') {
		loading = true;
		error = '';

		try {
			recipes = category
				? await filterByCategory(category)
				: await searchRecipes(query);
		} catch (caughtError) {
			error =
				caughtError instanceof Error
					? caughtError.message
					: 'Unable to load recipes.';
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		void registerStencil();

		const handleSearch = (event: Event) => {
			const customEvent = event as CustomEvent<{
				query: string;
				category: string;
			}>;

			void run(
				customEvent.detail.query,
				customEvent.detail.category
			);
		};

		search.addEventListener('searchSubmitted', handleSearch);

		void (async () => {
			categories = await getCategories().catch(() => []);
			await run();
		})();

		return () => {
			search?.removeEventListener(
				'searchSubmitted',
				handleSearch
			);
		};
	});

	$effect(() => {
		if (search) {
			search.categories = categories;
		}
	});
</script>

<h1>Discover recipes</h1>
<p>Search by name or choose a category.</p>

<recipe-search bind:this={search}></recipe-search>

{#if loading}
	<p class="status">Loading recipes...</p>
{:else if error}
	<div class="status" role="alert">
		<p>{error}</p>
		<button type="button" onclick={() => run()}>
			Try again
		</button>
	</div>
{:else if recipes.length === 0}
	<p class="status">
		No recipes found. Try another search.
	</p>
{:else}
	<p>{recipes.length} recipes found</p>

	<div class="grid">
		{#each recipes as recipe (recipe.id)}
			<RecipeCard {recipe} />
		{/each}
	</div>
{/if}