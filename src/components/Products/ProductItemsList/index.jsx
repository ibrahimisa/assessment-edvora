import React, { createRef } from 'react';
import ProductItem from './ProductItem';
import Scroll from '../../../Containers/Scroll';
import styles from './index.module.css';

function ProductItemsList({ name, products }) {
  const scrollContainer = createRef();

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>{name}</h4>
      <hr className={styles.divider} />
      <Scroll scrollElement={scrollContainer}>
        <div className={styles.products_list}>
          <div ref={scrollContainer} className={styles.scroll}>
            {products.map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        </div>
      </Scroll>
    </div>
  );
}

export default ProductItemsList;
