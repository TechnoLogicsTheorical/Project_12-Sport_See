import { createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import Debug from './pages/Debug.jsx';

const roads = createBrowserRouter([
    {
        path: '/',
        element: <Dashboard />
    },
    {
        path: '/debug',
        element: <Debug />
    }
]);

export default roads;