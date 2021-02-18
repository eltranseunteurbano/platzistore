import React from 'react';
import '../styles/components/Layout.css';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <section className="Main">
    <Header />
    {children}
    <Footer />
  </section>
);

export default Layout;
