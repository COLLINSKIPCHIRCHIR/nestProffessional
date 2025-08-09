import Navigation from './Navigation';
import Footer from './AppFooter';
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;