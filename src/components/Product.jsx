import React from 'react';
import '../styles/components/Products.css';

const Product = ({
  product,
  handleAddToCart,
  handleDeleteCart,
  isProductInShoppingCart,
}) => {
  const { image, title, price, description } = product;

  return (
    <div className="Products-item">
      <img src={image} alt={title} />
      <div className="Product-item-info">
        <h2>
          {title} <span>$ {price}</span>
        </h2>
        <p>{description}</p>
      </div>
      {isProductInShoppingCart ? (
        <button
          type="button"
          className="delete"
          onClick={handleDeleteCart(product)}
        >
          Eliminar
        </button>
      ) : (
        <button type="button" onClick={handleAddToCart(product)}>
          Comprar
        </button>
      )}
    </div>
  );
};

export default Product;
