import React from 'react'
import ProductItemsList from './ProductItemsList';
import styles from './index.module.css'

function Products({ products }) {
  Object.entries(products).forEach(entry =>console.log(entry))
  return (
    <div>
      <h3 className={styles.title}>Products</h3>
      <div className={styles.product_items_list_container}>
        {Object.entries(products).map(([productName, products]) => (
          <ProductItemsList key={productName} products={products} name={productName} />
        ))}
      </div>
    </div>
  );
}

export default Products