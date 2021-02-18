import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { Link } from 'react-router-dom';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleDeleteCart = (product) => () => {
    removeFromCart(product);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        {cart.length > 0 ? (
          cart.map((item) => {
            return (
              <div className="Checkout-item" key={item.id}>
                <div className="Checkout-element">
                  <h4>{item.title}</h4>
                  <span>${item.price}</span>
                </div>
                <button type="button" onClick={handleDeleteCart(item)}>
                  <i className="fas fa-trash-alt" />
                </button>
              </div>
            );
          })
        ) : (
          <p>No tienes productos en el carro de compras</p>
        )}
      </div>
      <div className="Checkout-sidebar">
        <h3>
          Precio Total: ${cart.reduce((acc, curr) => acc + curr.price, 0)}
        </h3>
        <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
