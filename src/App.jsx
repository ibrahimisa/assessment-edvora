import { useState, useEffect, Component } from 'react';
import './App.css';
import Filters from './components/Filters';
import Products from './components/Products';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: {},
      contentLoaded: false,
    };
  }

  componentDidMount() {
    // fetch products on mount
    this.fetchProducts().then((productsArr) => {
      // categorize products base on product name
      const categorizedProducts = {};
      productsArr.forEach((product) => {
        if (!categorizedProducts[product.product_name]) {
          categorizedProducts[product.product_name] = [];
        }
        categorizedProducts[product.product_name].push(product);
      });
      this.setState({ products: categorizedProducts, contentLoaded: true });
    });
  }

  // fetch products
  fetchProducts = async () => {
    const response = await fetch(
      'http://assessment-edvora.herokuapp.com/'
    );
    const data = await response.json();

    return data;
  };

  render() {
    const { products, contentLoaded } = this.state;

    return (
      <>
        {contentLoaded ? (
          <div className='App'>
            <div className='left_pane'>
              <Filters products={products} />
            </div>
            <div className='right_pane'>
              <h1 className="heading">Edvora</h1>
              <Products products={products} />
            </div>
          </div>
        ) : (
          <div>loading...</div>
        )}
      </>
    );
  }
}

// function App() {
//   const [products, setProducts] = useState([]);

//   useEffect( async() =>  {
//     const response = await fetch("/data.json");
//     const data = await response.json()
//     setProducts(data)
//   }, [])

//   return (
//     <div className='App'>
//       <div className='left_pane'>
//         <Filters products={products} />
//       </div>
//       <div className="right_pane">
//         <h1>Edvora</h1>
//         <Products products={products} />
//       </div>
//     </div>
//   );
// }

export default App;
