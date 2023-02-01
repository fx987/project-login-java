import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "../components/login/Login";
import Register from "../components/register/Register";


const routers = createBrowserRouter([{
    path: "/",
    element: <Login />,
}, {
    path: "/Register",
    element: <Register />,

}])



export default () => {
    return (
        <RouterProvider router={routers} />
    )
}