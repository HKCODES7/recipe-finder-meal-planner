<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { registerStencil } from './stencil';
	import { appState } from './storage.svelte';
	import type { Recipe } from './types';

	let {
		recipe,
		editable = false,
		onDelete = () => {}
	}: {
		recipe: Recipe;
		editable?: boolean;
		onDelete?: () => void;
	} = $props();

	let el: HTMLElement & {
		recipeId?: string;
		recipeTitle?: string;
		imageUrl?: string;
		category?: string;
		isFavorite?: boolean;
		showEdit?: boolean;
	editUrl?: string;
	};

	onMount(() => {
		void registerStencil();

		const handleFavorite = () => {
			appState.toggleFavorite(recipe);
		};

		const handleDetails = () => {
			void goto(`/recipes/${recipe.source}/${recipe.id}`);
		};

		const handleEdit = () => {
			void goto(`/my-recipes/${recipe.id}/edit`);
		};

		const handleDelete = () => {
			onDelete();
		};

		el.addEventListener('favoriteToggled', handleFavorite);
		el.addEventListener('detailsRequested', handleDetails);
		el.addEventListener('editRequested', handleEdit);
		el.addEventListener('deleteRequested', handleDelete);

		return () => {
			el?.removeEventListener('favoriteToggled', handleFavorite);
			el?.removeEventListener('detailsRequested', handleDetails);
			el?.removeEventListener('editRequested', handleEdit);
			el?.removeEventListener('deleteRequested', handleDelete);
		};
	});

	$effect(() => {
		if (el) {
			el.recipeId = recipe.id;
			el.recipeTitle = recipe.title;
			el.imageUrl = recipe.imageUrl;
			el.category = recipe.category;
			el.isFavorite = appState.isFavorite(recipe.id);
			el.showEdit = editable;
			el.editUrl = editable ? `/my-recipes/${recipe.id}/edit` : '';
		}
	});
</script>

<recipe-card bind:this={el}></recipe-card>