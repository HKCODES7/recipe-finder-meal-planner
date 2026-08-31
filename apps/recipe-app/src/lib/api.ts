import type {Recipe,Ingredient} from './types'; const BASE='https://www.themealdb.com/api/json/v1/1';
function normalize(m:any):Recipe{const ingredients:Ingredient[]=[];for(let i=1;i<=20;i++){const name=m[`strIngredient${i}`]?.trim();if(name)ingredients.push({name,measure:m[`strMeasure${i}`]?.trim()||''})}return{id:String(m.idMeal),title:m.strMeal,imageUrl:m.strMealThumb||'',category:m.strCategory||'',area:m.strArea||'',instructions:m.strInstructions||'',ingredients,source:'api'}}
async function get(path:string){const r=await fetch(`${BASE}${path}`);if(!r.ok)throw new Error('Recipe service is unavailable.');return r.json()}
export async function searchRecipes(q:string){const d=await get(`/search.php?s=${encodeURIComponent(q)}`);return (d.meals||[]).map(normalize)}
export async function filterByCategory(c:string){const d=await get(`/filter.php?c=${encodeURIComponent(c)}`);return (d.meals||[]).map((m:any)=>normalize(m))}
export async function getRecipe(id:string){const d=await get(`/lookup.php?i=${encodeURIComponent(id)}`);return d.meals?.[0]?normalize(d.meals[0]):null}
export async function getCategories(){const d=await get('/list.php?c=list');return (d.meals||[]).map((x:any)=>x.strCategory as string)}
