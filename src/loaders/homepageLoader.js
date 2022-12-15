export async function homepageLoader() {
  const response = await fetch("https://restapi.fr/api/CookChef");
  if (response.ok) {
    const data = await response.json();
    // Emulate latency to test loading UI
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 3000);
    });
  } else {
    throw new Error("Can't fetch fetch datas.");
  }
}
