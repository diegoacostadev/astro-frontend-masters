import { computed, map } from 'nanostores';


export const $cart = map<Record<number, CartItem | undefined>>({});

export const addItemToCart = (item: ShopItem) => {
  const cartItem = $cart.get()[item.id];
  const quantity = cartItem ? cartItem.quantity : 0;

  $cart.setKey(item.id, {
    item,
    quantity: quantity + 1
  });
}

export const removeItemFromCart = (id: ShopItem['id']) => {
  $cart.setKey(id, undefined)
}

export const $subtotal = computed($cart, entries => {
  let total = 0;

  Object.values(entries).forEach(entry => {
    if (!entry) return;
    total += entry.item.price * entry.quantity;
  });

  return total;
});
