import { createBrowserRouter } from "react-router";
import App from "../App";
import Todo from "@/components/pages/Todo";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/todo',
                element: <Todo/>
            }
        ]
    }
])