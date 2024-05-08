import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Info from "./components/info/info";

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
            {
                path: "info",
                element: <Info />,
            },
        ],
    },
];

export default routes;
