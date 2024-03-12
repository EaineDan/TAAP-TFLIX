// import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landingpage from "./pages/landingpage";


const myrouter = createBrowserRouter([
  {path:"/", element:<Landingpage/>},
])


function App() {
  return <RouterProvider router={myrouter}/>;
}

export default App;
