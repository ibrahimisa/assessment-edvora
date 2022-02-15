import React, { useReducer, useState } from 'react';
import Select from './Select';
import styles from './index.module.css'

class Filters extends React.Component{
    productsName = [];
    productStates = {};
    productCities = {};
    
  constructor(props) {
    super(props)

    const { products } = this.props;
    // loop through product to extract states and cities
    Object.entries(products).forEach(([product, products]) => {
      this.productsName.push(product);
      this.productStates[product] = new Set(); // set is used here to avoid dublication
      this.productCities[product] = new Set();
      products.forEach((item) => {
        this.productStates[product].add(item.address.state);
        this.productCities[product].add(item.address.city);
      });
    });
  
    this.state = {
      productsName: this.productsName,
      states: this.getArrayFromObjectValues(this.productStates),
      cities: this.getArrayFromObjectValues(this.productCities),
      product: 'Products',
      state: 'States',
      city: 'Cities',
    };
  }

  getArrayFromObjectValues = (object)=>{
    const array = Array.from(
        new Set(
          Object.values(object).reduce(
            (prevStates, currentStates) =>
              prevStates.concat(Array.from(currentStates)),
            []
          )
        )
      );
      return array
  }


  selectHandler = ({ target }) =>  {
    const value = target.value;
    target = target.name.toLowerCase()

    let { states, cities, product, state, city } = this.state

    if (target === 'products') {
      product = value;

      // return all states if no product is selected
      if (value === 'Products') {
        states = this.getArrayFromObjectValues(this.productStates)
      } else {
        states = Array.from(this.productStates[value]);
      }

    } else if (target === 'states') {
      state = value;

      // return all cities if no state is selected
      if (value === 'States'){
        cities = this.getArrayFromObjectValues(this.productCities)
      } else{
        cities = Array.from(this.productCities[product]);
      }
    } else if (target === 'cities' && value !== 'Cities') {
      city = value;
    }
    
    this.setState({ states, cities, product, state, city });
  }
  
  render(){
    const {productsName, states, cities, product, state, city} = this.state

    return (
      <div className={styles.filters}>
        <h2>Filters</h2>
        <hr className={styles.divider} />
        <Select
          className={styles.select}
          name='Products'
          value={product}
          options={productsName}
          changeHandler={this.selectHandler}
        />
        <Select
          className={styles.select}
          name='States'
          value={state}
          options={states}
          changeHandler={this.selectHandler}
        />
        <Select
          className={styles.select}
          name='Cities'
          value={city}
          options={cities}
          changeHandler={this.selectHandler}
        />
      </div>
    );
  }
}

export default Filters;
