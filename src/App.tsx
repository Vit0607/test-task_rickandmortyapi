import { Outlet } from 'react-router';
import './App.scss';
import FavoritesLink from 'components/common/FavoritesLink/FavoritesLink';
import { Toaster } from 'sonner';
import { useLocation } from 'react-router';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Toaster richColors position="top-right" />
      <FavoritesLink />
      <Outlet />
    </>
  );
};

export default App;
