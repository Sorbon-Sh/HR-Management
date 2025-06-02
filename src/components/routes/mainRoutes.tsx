import { createBrowserRouter } from "react-router";

import Login from "../pages/Login";

import { ProtectedRoute } from "./ProtectedRoute";
import Employees from "../pages/Employees";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<ProtectedRoute><Employees /></ProtectedRoute>),
  },
  {
    path: "/login",
    element:  <Login />, 
    
  },
]);

export default router;
