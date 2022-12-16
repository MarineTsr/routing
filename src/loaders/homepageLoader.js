import { getRecipes } from "./../apis/recipes";

export async function homepageLoader({ params, request }) {
  console.log("Params : ", params);
  console.log("Request : ", request);

  const recipes = await getRecipes();

  return recipes;
}
