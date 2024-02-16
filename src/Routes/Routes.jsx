import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ByCategoryPage from "../Pages/ByCategoryPage/ByCategoryPage";
import PostDetailsPage from "../Pages/PostDetailsPage/PostDetailsPage";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bycategory/:categoryID",
        element: <ByCategoryPage></ByCategoryPage>,
      },
      {
        path: "/details/:postID",
        element: <PostDetailsPage></PostDetailsPage>,
      },
    ],
  },
]);
