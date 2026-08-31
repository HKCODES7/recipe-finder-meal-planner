import { EventEmitter } from '../../stencil-public-runtime';
export declare class RecipeSearch {
    initialQuery: string;
    categories: string[];
    query: string;
    category: string;
    searchSubmitted: EventEmitter<{
        query: string;
        category: string;
    }>;
    componentWillLoad(): void;
    submit(e: Event): void;
    render(): any;
}
