// import './App.css';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Signin from "./pages/signinpage";
import Signup from "./pages/signuppage";
import Moviedetail from "./pages/moviedetailpage";
import Movielist from "./pages/movielistpage";
import SubscriptionPlan from "./pages/subscriptionplan";
import BillingForm from "./pages/billing";
import ConfirmationPage from "./pages/confirmation";

const myrouter = createBrowserRouter([
  {path:"/", element:<Landingpage/>},
  {path:"/signin", element:<Signin/>},
  {path:"/signup", element:<Signup/>},
  {path:"/moviedetail", element:<Moviedetail/>},
  {path:"/movielist", element:<Movielist/>},
  {path:"/subscription", element:<SubscriptionPlan/>},
  {path:"/billing", element:<BillingForm/>},
  {path:"/confirmation", element:<ConfirmationPage/>}
])


function App() {
  return <RouterProvider router={myrouter}/>;
  
}

export default App;
