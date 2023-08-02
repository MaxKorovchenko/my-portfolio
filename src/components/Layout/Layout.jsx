import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '../AppBar/AppBar';
import { Footer } from '../Footer/Footer';

import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <AppBar />

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>

      <Footer />
    </div>
  );
};
