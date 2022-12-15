export async function homepageLoader() {
  const response = await fetch("https://restapi.fr/api/CookChef");
  if (response.ok) {
    const data = await response.json();
    return data;
  }
}
