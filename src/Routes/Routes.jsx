import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home/Home";
import Menu from "../components/Menu/Menu";


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
        }
      ]
    },
  ]);
  