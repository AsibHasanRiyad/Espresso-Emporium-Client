import {
    createBrowserRouter,
  } from "react-router-dom";
import MainPage from "../Pages/MainPage/MainPage";
import Home from "../Pages/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";
import Details from "../Pages/Details/Details";

  const myCreatedRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/addCoffee',
          element:<AddCoffee></AddCoffee>
        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader: ({params}) => fetch(`http://localhost:5006/coffees/${params.id}`)
        },
        {
          path:'/updateCoffee/:id',
          element:<UpdateCoffee></UpdateCoffee>,
          loader: ({params}) => fetch(`http://localhost:5006/coffees/${params.id}`)
        },
      ]
    },
  ]);
  export default myCreatedRouter;