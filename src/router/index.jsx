import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/layouts/Layout";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Admin/Dashboard";
import Profile from "../Pages/Admin/Profile";
import Admins from "../Pages/Admin/Users/Admins";
import Masters from "../Pages/Admin/Users/Masters";
import Agents from "../Pages/Admin/Users/Agents";
import Users from "../Pages/Admin/Users/Users";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children : [
        {
            path : "/",
            element : <Dashboard />
        },
        {
          path : "/admin/admins",
          element : <Admins />
        },
        {
          path : "/admin/masters",
          element : <Masters />
        },        
        {
          path : "/admin/agents",
          element : <Agents />
        },
        {
          path : "/admin/users",
          element : <Users />
        },
        {
          path : "/profile",
          element : <Profile />
        },
        {
            path : "*",
            element : <NotFound />
        }
      ]
    },
    {
      path : "/login",
      element : <Login />
    },
    {
      path : "/register",
      element : <Register />
    },
]);


export default router;