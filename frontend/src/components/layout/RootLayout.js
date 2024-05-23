import { Outlet } from 'react-router-dom';
import MainNavigation from '../MainNavigation';

const RootLayout = () => {
  return (
    <>
      {/* Navigation */}
      <MainNavigation />

      {/* Pages */}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
