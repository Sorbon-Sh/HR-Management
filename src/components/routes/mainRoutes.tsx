import { createBrowserRouter } from "react-router";
import App from "../../App";
import Login from "../pages/Login";

import { ProtectedRoute } from "./ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<ProtectedRoute><App /></ProtectedRoute>),
  },
  {
    path: "/login",
    element:  <Login />, 
    
  },
]);

export default router;
