import { RouteObject } from 'react-router-dom';
import { Layout } from './components/layout/layout';
import { Home } from './components/home/home';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [{ index: true, element: <Home /> }],
    },
];
