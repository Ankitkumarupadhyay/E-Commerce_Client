import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPAssword from "../pages/ForgotPAssword";
import Signup from "../pages/Signup";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPAssword />,
      },
      {
        path: "/signUp",
        element: <Signup />,
      },
    ],
  },
]);

export default appRouter;
