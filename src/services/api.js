export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';

  const result = await fetch(url);
  const data = result.json();

  return data;
}


export async function getOneCategoy(categoryId) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  const result = await fetch(url);
  const data = result.json();

  return data;
}