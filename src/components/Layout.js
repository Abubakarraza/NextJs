import React from 'react';
import Footer from './Footer';
import Header from './Header';
import styles from '../../styles/components/Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
