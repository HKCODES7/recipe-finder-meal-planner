import type { Components, JSX } from "../types/components";

interface RecipeSearch extends Components.RecipeSearch, HTMLElement {}
export const RecipeSearch: {
    prototype: RecipeSearch;
    new (): RecipeSearch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
