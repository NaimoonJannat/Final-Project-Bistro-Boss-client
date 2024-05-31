import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import Order from "../components/Order/Order";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Dashboard from "../components/Dashboard";
import Cart from "../components/Dashboard/Cart";
import Payment from "../components/Dashboard/Payment";
import Bookings from "../components/Dashboard/Bookings";
import Reservation from "../components/Dashboard/Reservation";
import MyReview from "../components/Dashboard/MyReview";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        {
          path:"/menu",
          element: <Menu></Menu>
        },
        {
          path:"/order/:category",
          element: <Order></Order>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        
      ]
    },
    {
      path:"/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"cart",
          element:<Cart></Cart>
        },
        {
          path:"payment",
          element:<Payment></Payment>
        },
        {
          path:"bookings",
          element:<Bookings></Bookings>
        },
        {
          path:"reservation",
          element:<Reservation></Reservation>
        },
        {
          path:"review",
          element:<MyReview></MyReview>
        },
      ]
    }
  ]);
  