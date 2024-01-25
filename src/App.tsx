import React from "react";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Slash from "./pages/Slash";
import Login from "./pages/Login";
import { Toaster } from "@/components/ui/toaster";

const App:React.FC = () => {
  const router = createBrowserRouter(
    [
      { path: "/", element: <Slash /> },
      { path: "/login", element: <Login /> }
    ]
  );

  return(
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

export default App;