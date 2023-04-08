import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import Province from "../Pages/Province/Province"

const publicRoutes = [
    { path: "/viette/", component: Home , num: 1 },
    { path: "/Province", component: Province,num: 2 },
    { path: "/Contact", component: Contact,num: 3 },
];
export  {publicRoutes}