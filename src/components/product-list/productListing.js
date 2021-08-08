import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from '../product-component/productComponent';
import { setProducts } from '../../redux/actions/productActions';
import axios from 'axios';
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('Err', err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);

  return (
    <div className='ui grid container'>
      {/* <h1>ProductListing</h1>
      {products.allProducts.products.map((el) => (
        <ProductComponent key={el.id} props={el} />
      ))}*/}
      <ProductComponent />
    </div>
  );
};

export default ProductListing;

/*class ProductListing extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get('https://fakestoreapi.com/products?limit=5').then((res) => {
      // console.log(res.data);
      this.setState({ products: res.data });
      // store.dispatch(setProducts(res.data));
    });

    // console.log(data);
  }

  render() {
    return (
      <ul>
        {}

        {this.state.products.map((product) => (
          <li key={product.id}>
            <img src={product.image} style={{ width: 100 }} alt='' />
            <h3>{product.title}</h3>
            <h5>{product.price}$</h5>
          </li>
        ))}
      </ul>
    );
  }
}*/
