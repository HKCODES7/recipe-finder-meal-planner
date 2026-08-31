import { p as promiseResolve, b as bootstrapLazy } from './index-g1DkgzAh.js';
export { s as setNonce } from './index-g1DkgzAh.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

/*
 Stencil Client Patch Browser v4.44.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["app-modal",[[257,"app-modal",{"open":[4]}]]],["meal-day",[[1,"meal-day",{"day":[1],"recipeTitle":[1,"recipe-title"],"imageUrl":[1,"image-url"]}]]],["recipe-card",[[257,"recipe-card",{"recipeId":[1,"recipe-id"],"recipeTitle":[1,"recipe-title"],"imageUrl":[1,"image-url"],"category":[1],"isFavorite":[4,"is-favorite"],"showEdit":[4,"show-edit"],"editUrl":[1,"edit-url"]}]]],["recipe-search",[[1,"recipe-search",{"initialQuery":[1,"initial-query"],"categories":[16],"query":[32],"category":[32]}]]]], options);
});
