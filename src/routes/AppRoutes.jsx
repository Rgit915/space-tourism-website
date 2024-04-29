import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from '../layouts/RootLayout'; //Importing layout component
import Home from '../pages/Home';
import Destination from '../pages/Destination';
import Crew from '../pages/Crew';
import Technology from '../pages/Technology';

// Creating a browser router instance using createBrowserRouter
const router = createBrowserRouter(
  // Creating routes from JSX elements using createRoutesFromElements
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Route>
    )
  );

const AppRoutes = () => {
  return(
    <RouterProvider router={router} />
  )

};

export default AppRoutes;

