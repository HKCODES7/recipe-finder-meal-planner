import { b as bootstrapLazy } from './index-g1DkgzAh.js';
export { s as setNonce } from './index-g1DkgzAh.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["app-modal",[[257,"app-modal",{"open":[4]}]]],["meal-day",[[1,"meal-day",{"day":[1],"recipeTitle":[1,"recipe-title"],"imageUrl":[1,"image-url"]}]]],["recipe-card",[[257,"recipe-card",{"recipeId":[1,"recipe-id"],"recipeTitle":[1,"recipe-title"],"imageUrl":[1,"image-url"],"category":[1],"isFavorite":[4,"is-favorite"],"showEdit":[4,"show-edit"],"editUrl":[1,"edit-url"]}]]],["recipe-search",[[1,"recipe-search",{"initialQuery":[1,"initial-query"],"categories":[16],"query":[32],"category":[32]}]]]], options);
};

export { defineCustomElements };
