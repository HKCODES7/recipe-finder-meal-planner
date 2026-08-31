import { EventEmitter } from '../../stencil-public-runtime';
export declare class RecipeCard {
    recipeId: string;
    recipeTitle: string;
    imageUrl: string;
    category: string;
    isFavorite: boolean;
    showEdit: boolean;
    editUrl: string;
    favoriteToggled: EventEmitter<{
        recipeId: string;
    }>;
    detailsRequested: EventEmitter<{
        recipeId: string;
    }>;
    deleteRequested: EventEmitter<{
        recipeId: string;
    }>;
    private handleImageError;
    render(): any;
}
