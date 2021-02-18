import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';

const Products = () => {
  const {
    state: { products, cart },
    addToCart,
    removeFromCart,
  } = useContext(AppContext);

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  const handleDeleteCart = (product) => () => {
    removeFromCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => {
          const isProductInShoppingCart = !!cart.find(
            (item) => item.id === product.id
          );
          return (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              handleDeleteCart={handleDeleteCart}
              isProductInShoppingCart={isProductInShoppingCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
