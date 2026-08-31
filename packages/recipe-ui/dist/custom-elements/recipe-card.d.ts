import type { Components, JSX } from "../types/components";

interface RecipeCard extends Components.RecipeCard, HTMLElement {}
export const RecipeCard: {
    prototype: RecipeCard;
    new (): RecipeCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
