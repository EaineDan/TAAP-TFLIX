// import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import MovieList from "./pages/movielistpage";
import MovieDetail from "./pages/moviedetailpage";


const router = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
  { path: "/movielist", element: <MovieList /> },
  { path: "/moviedetail", element: <MovieDetail /> },
]);

function App() {
  return (
   <RouterProvider router={router} />)
}

export default App;
