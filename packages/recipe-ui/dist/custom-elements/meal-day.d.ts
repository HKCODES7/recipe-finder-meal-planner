import type { Components, JSX } from "../types/components";

interface MealDay extends Components.MealDay, HTMLElement {}
export const MealDay: {
    prototype: MealDay;
    new (): MealDay;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
