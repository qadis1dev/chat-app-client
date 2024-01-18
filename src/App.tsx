import React from "react";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

const App:React.FC = () => {
  const router = createBrowserRouter(
    []
  );

  return <RouterProvider router={router} />
};

export default App;