import { useStore } from '@nanostores/react';
import { $cart, removeItemFromCart, $subtotal } from '../stores/cart';
import { formatCurrency } from '../utils/currency';

import styles from './cart.module.css';
import { useState } from 'react';

const EmptyState = () => {
  return (
    <>
      <p className={styles.icon}>
        <span role="img" aria-label='hot dog'>🌭</span>
      </p>
      <p className="empty">Your cart is empty. Add a sandwich kit or two and give a flavor chance.</p>
    </>
  )
}

const CheckoutNotice = () => {
  return (
    <p className={styles.notice}>
      Checkout is not implemented yet.
    </p>
  )
}

const Cart = () => {
  const [showNotice, setshowNotice] = useState(false);
  const subtotal = useStore($subtotal);
  const cart = useStore($cart);

  return (
    <aside className={styles.cart}>
      <h2>Your Cart</h2>
      {Object.values(cart).length > 0 ? (
        <>
          <ul className={styles.items}>
            {Object.values(cart).map((entry) =>
              !entry ? null : (
                <li className={styles.item} key={entry.item.id}>
                  <span className={styles.quantity}>{entry.quantity}</span>
                  <span className={styles.name}>{entry.item.title}</span>
                  <span className={styles.remove}>
                    <button
                      title="Remove item"
                      onClick={() => removeItemFromCart(entry?.item.id)}
                    >
                      ❌
                    </button>
                  </span>
                  <span className={styles.price}>{entry.item.price}</span>
                </li>
              )
            )}
          </ul>
          <div className={styles.details}>
            <p className={styles.subtotal}>
              <span className={styles.label}>Subtotal:</span>{' '}
              {formatCurrency(subtotal)}
            </p>
            <p className={styles.shipping}>
              <span className={styles.label}>Shipping:</span> <del>$10.00</del>
              <ins>FREE</ins>
            </p>
            <p className={styles.total}>
              <span className={styles.label}>Total:</span>{' '}
              {formatCurrency(subtotal)}
            </p>
            <p className={styles.checkout}>
              <button className="big-link" onClick={() => setshowNotice(true)}>
                Check out
              </button>
            </p>
          </div>
        </>
      ) : (
        <EmptyState />
      )}
      {
        showNotice ?
          <CheckoutNotice/> : null
      }
    </aside>
  );
}

export default Cart;
