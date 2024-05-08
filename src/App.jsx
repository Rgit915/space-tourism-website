import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";


import RootLayout from "./layouts/RootLayout";

import data from "./data.json";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home  data={data}/>} />
      <Route path="destination" element={<Destination data={data}/>} />
      <Route path="crew" element={<Crew data={data} />} />
      <Route path="technology" element={<Technology data={data}/>} />
    </Route>
  )
);
const App = () => {
  return (

      <RouterProvider router={router} />

  );
};

export default App;
