import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";
import Order from "../components/Order/Order";


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
      ]
    },
  ]);
  