import { EventEmitter } from '../../stencil-public-runtime';
export declare class MealDay {
    day: string;
    recipeTitle: string;
    imageUrl: string;
    chooseMeal: EventEmitter<{
        day: string;
    }>;
    removeMeal: EventEmitter<{
        day: string;
    }>;
    render(): any;
}
