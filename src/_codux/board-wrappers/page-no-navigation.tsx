import { RouterProvider, createMemoryRouter } from 'react-router-dom';
import { Layout } from '../../components/layout/layout';

export function PageNoNavigation(props: { children: React.ReactNode }) {
    const router = createMemoryRouter([
        {
            path: '/',
            element: <Layout />,
            children: [{ index: true, element: props.children }],
        },
    ]);
    return <RouterProvider router={router} />;
}
