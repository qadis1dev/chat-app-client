import React from "react";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import Slash from "./pages/Slash";

const App:React.FC = () => {
  const router = createBrowserRouter(
    [
      { path: "/", element: <Slash /> }
    ]
  );

  return <RouterProvider router={router} />
};

export default App;