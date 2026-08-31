'use strict';

var index = require('./index-B2UvBNuy.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["app-modal.cjs",[[257,"app-modal",{"open":[4]}]]],["meal-day.cjs",[[1,"meal-day",{"day":[1],"recipeTitle":[1,"recipe-title"],"imageUrl":[1,"image-url"]}]]],["recipe-card.cjs",[[257,"recipe-card",{"recipeId":[1,"recipe-id"],"recipeTitle":[1,"recipe-title"],"imageUrl":[1,"image-url"],"category":[1],"isFavorite":[4,"is-favorite"],"showEdit":[4,"show-edit"],"editUrl":[1,"edit-url"]}]]],["recipe-search.cjs",[[1,"recipe-search",{"initialQuery":[1,"initial-query"],"categories":[16],"query":[32],"category":[32]}]]]], options);
};

exports.setNonce = index.setNonce;
exports.defineCustomElements = defineCustomElements;
