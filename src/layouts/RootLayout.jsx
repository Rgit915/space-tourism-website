import { useEffect, useState } from "react";
import { useLocation, Outlet } from "react-router-dom";
import getBackgroundClass from "../helpers/backgroundUtils";

import Header from "../components/Header";

const RootLayout = () => {
  const location = useLocation();

  //state to hold the background class
  const [backgroundClass, setBackgroundClass] = useState("");

  useEffect(() => {
    const newBackgroundClass = getBackgroundClass(
      location.pathname,
      window.innerWidth
    );
    setBackgroundClass(newBackgroundClass);  //update backgroundClass state
  }, [location.pathname]);  

  return (
    <>
      {/* Header component */}
      <Header />
      {/* Main content area with dynamic background class */}
      <main className={`m-h-screen ${backgroundClass}`}>
        {/* Outlet for rendering nested route components */}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
