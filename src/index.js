import React from 'react';
import { createRoot } from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import roads from './router/roads.js';

createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <RouterProvider router={roads} />
        </React.StrictMode>
    )
;