export const getShopItems = async () => {
  const res = await fetch(`https://astro-frontend-masters-api.netlify.app/api/products
  `);

  if (!res.ok) {
    console.error(res);
  }

  const shopItems: ShopItem[] = await res.json();

  return shopItems;
}
