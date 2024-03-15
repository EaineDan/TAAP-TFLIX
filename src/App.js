// import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Signin from "./pages/signinpage";
import Signup from "./pages/signuppage";
import Movies from "./pages/movies";
import MovieDetails from "./pages/moviedetails";
import WatchListP from "./pages/watchList/WatchListP";
import Add from "./components/userActivities/Add";
import Watched from "./components/userActivities/Watched";

const myrouter = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/movies", element: <Movies /> },
  { path: "/movies/:id", element: <MovieDetails /> },
  { path: "/movies/watchlist", element: <WatchListP /> },
  { path: "/watchlist", element: <WatchListP /> },
  { path: "/watchlist/watched", element: <Watched /> },
  { path: "/watchlist/add", element: <Add /> },
]);

function App() {
  return <RouterProvider router={myrouter} />;
}

export default App;
