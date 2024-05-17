import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Info from "./components/info/info";
import DuckTracker from "./components/DuckTracker/DuckTracker";
import RandomDuck from "./components/RandomDuck/RandomDuck";

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
            {
                path: "tracker",
                element: <DuckTracker />,
            },
            {
                path: "randomduck",
                element: <RandomDuck />,
            },
        ],
    },
];

export default routes;
