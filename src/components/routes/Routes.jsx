
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../pages/Login/Login";
import Register from "../pages/Home/Register/Register";
import News from "../pages/Home/News/News";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('news.json')
        },
        {
          path: '/news/:id',
          element: <News></News>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
    ]
  },
]);

export default router;


