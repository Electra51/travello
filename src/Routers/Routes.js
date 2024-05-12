import Mainlayout from "../Layouts/Mainlayout";
import Calender from "../pages/Calender/Calender";
import CustomPrice from "../pages/CustomPrice/CustomPrice";
import Dashboard from "../pages/Dashboard/Dashboard";
import MasterPrice from "../pages/MasterPrice/MasterPrice";
import Reports from "../pages/Reports/Reports";

const { createBrowserRouter } = require("react-router-dom");
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    errorElement: <h2>404 error</h2>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/master-price",
        element: <MasterPrice />,
      },
      {
        path: "/custom-price",
        element: <CustomPrice />,
      },
      {
        path: "/calender",
        element: <Calender />,
      },
      {
        path: "/report",
        element: <Reports />,
      },
    ],
  },
]);
