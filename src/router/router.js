import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import App from "../App";
import LandingPage from "../screens/LandingPage/LandingPage";
const basename = process.env.NODE_ENV === 'production' ? '/front_react_diplomado' : '/';
import Dictionary from '../screens/Dictionary/Dictionary';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,

        children: [
            {
                path: '/',
                element: <LandingPage/>,
            },
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '/dictionary',
                element: <Dictionary />,
            }
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;