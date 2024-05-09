import { createBrowserRouter } from "react-router-dom";
import Home from "./home";
import MovieDetail from "./movieDetail";

const Router = createBrowserRouter([
  
    {
        path: "/",
        element: <Home />,
        children: [],
        errorElement: <div>error</div>
    },
    {
        path: "/movie/:id",
        element: <MovieDetail />,

        errorElement: <div>error movie detail</div>
    }
])

export default Router