import Mainlayout from "../Layouts/Mainlayout";

const { createBrowserRouter } = require("react-router-dom");
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <h2>404 error</h2>,
    children: [
      {
        path: "/",
        element: <h3 className="text-red-500">hello</h3>,
      },
    ],
  },
]);
