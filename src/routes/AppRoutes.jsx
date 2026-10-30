import Home from "../pages/Home/Home";
import Interview from "../pages/Interview/Interview";
import { createBrowserRouter } from "react-router-dom";
import InterviewSetup from "../pages/InterviewSetup/InterviewSetup";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/interview/setup",
    element: <InterviewSetup />,
  },

  {
    path: "/interview",
    element: <Interview />,
  },

  // {
  //   path: "/history",
  //   element: <History />,
  // },

  // {
  //   path: "/analytics",
  //   element: <Analytics />,
  // },

  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },

  // {
  //   path: "/settings",
  //   element: <Settings />,
  // },
  // { path: "/interview/results", element: <Results /> },
]);
export default appRoutes;
