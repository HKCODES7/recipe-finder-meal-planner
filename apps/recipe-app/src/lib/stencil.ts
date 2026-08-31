import {browser} from '$app/environment';let done=false;export async function registerStencil(){if(browser&&!done){const {defineCustomElements}=await import('@hitainkakkar/recipe-ui/dist/custom-elements/index.js');defineCustomElements();done=true}}

