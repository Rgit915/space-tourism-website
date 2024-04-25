import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

import logo from "./assets/shared/logo.svg";
import menuIcon from "./assets/shared/icon-hamburger.svg";
import closeIcon from "./assets/shared/icon-close.svg";
import NavLinks from "./components/NavLinks";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav className="flex justify-between items-center ">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <div className="">
                <button type="button">
                  <img src={menuIcon} alt="Navigation menu" />
                </button>

                <button type="button" className="hidden">
                  <img src={closeIcon} alt="close Icon" />
                </button>
              </div>
              <NavLinks/>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="technology" element={<Technology />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
