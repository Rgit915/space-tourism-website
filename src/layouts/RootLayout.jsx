import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {

  return (
    <>
      {/* Header component */}
      <Header />
      {/* Main content area with dynamic background class */}
      <main className={`${getBackgroundClass()}`}>
        {/* Outlet for rendering nested route components */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
