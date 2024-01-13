
import { addItemToCart } from '../stores/cart';

export default function AddToCart({ item }: { item: ShopItem }) {
  return (
    <button className='big-link' onClick={() => addItemToCart(item)}>Add To Cart</button>
  )
}
