import { createBrowserRouter } from 'react-router-dom';
import Debug from './pages/Debug.jsx';

const roads = createBrowserRouter([
    {
        path: '/',
        element: <Debug />
    }
]);

export default roads;