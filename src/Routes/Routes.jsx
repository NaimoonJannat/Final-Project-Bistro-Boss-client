import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";


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

        }
      ]
    },
  ]);
  