import "./index.css";
import Homepage from "./pages/Homepage";
import BuyNow from "./pages/Buynow";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "buynow",
        element: <BuyNow />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
