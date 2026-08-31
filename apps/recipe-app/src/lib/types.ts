export type Ingredient={name:string;measure:string};
export type Recipe={id:string;title:string;imageUrl:string;category:string;area:string;instructions:string;ingredients:Ingredient[];source:'api'|'user';createdAt?:string};
export type Day='monday'|'tuesday'|'wednesday'|'thursday'|'friday'|'saturday'|'sunday';
export type MealPlan=Record<Day,Recipe|null>;
