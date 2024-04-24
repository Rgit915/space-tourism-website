import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <div>
              <img src="" alt="logo" />
            </div>
            <div>
              <NavLink to="/"> 00 Home </NavLink>
              <NavLink to="destination">01 Destination </NavLink>
              <NavLink to="crew">02 Crew</NavLink>
              <NavLink to="technology">03 Technology</NavLink>
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
