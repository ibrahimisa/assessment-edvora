import React from 'react';
import styles from './ProductItem.module.css';

function ProductItem({ product }) {
  return (
    <div className={styles.item}>
        <img
          src={product.image}
          alt={product.product_name}
          className={styles.image}
        />
        <div className={styles.details}>
          <h5 className={styles.product_name}>{product.product_name}</h5>
          <h6 className={styles.brand_name}>{product.brand_name}</h6>
          <p>
            <span className={styles.dollar_sign}>$</span>
            <span className={styles.price}>{product.price}</span>
          </p>
        </div>
        <h6 className={styles.location}>
          {product.address.city}
        </h6>
        <p className={styles.date}>
          Date:
          <span>
            {new Date(`${product.date}`).getMonth() + 1}:
            {new Date(`${product.date}`).getDate()}:
            {new Date(`${product.date}`).getFullYear()}
          </span>
        </p>
      <p className={styles.description}>{product.discription}</p>
    </div>
  );
}

export default ProductItem;
