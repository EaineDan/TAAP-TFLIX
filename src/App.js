// import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Signin from "./pages/signinpage";
import Signup from "./pages/signuppage";
import Movies from "./pages/movies";
import MovieDetails from "./pages/moviedetails";
import TrailerNowPlaying from "./components/movieCard/TrailerNowPlaying";

const myrouter = createBrowserRouter([
  { path: "/", element: <Landingpage /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/movies", element: <Movies /> },
  { path: "/movies/:id", element: <MovieDetails /> },
  { path: "/trailer", element: <TrailerNowPlaying/>  }

])


function App() {
  return <RouterProvider router={myrouter} />;
}

export default App;
