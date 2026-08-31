'use strict';

var index = require('./index-B2UvBNuy.js');
var appGlobals = require('./app-globals-V2Kpy_OQ.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.44.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('recipeui.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await appGlobals.globalScripts();
  return index.bootstrapLazy([["app-modal.cjs",[[257,"app-modal",{"open":[4]}]]],["meal-day.cjs",[[1,"meal-day",{"day":[1],"recipeTitle":[1,"recipe-title"],"imageUrl":[1,"image-url"]}]]],["recipe-card.cjs",[[257,"recipe-card",{"recipeId":[1,"recipe-id"],"recipeTitle":[1,"recipe-title"],"imageUrl":[1,"image-url"],"category":[1],"isFavorite":[4,"is-favorite"],"showEdit":[4,"show-edit"],"editUrl":[1,"edit-url"]}]]],["recipe-search.cjs",[[1,"recipe-search",{"initialQuery":[1,"initial-query"],"categories":[16],"query":[32],"category":[32]}]]]], options);
});

exports.setNonce = index.setNonce;
