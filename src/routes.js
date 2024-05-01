import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
];

export default routes;
