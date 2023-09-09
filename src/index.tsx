import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root';
import ErrorPage from './pages/error-page';
import Projects from './routes/Projects';
import Stack from './routes/Stack';
import Project from './routes/Project';
import './i18n';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'projects',
        element: <Projects />,
      },
      {
        path: 'stack',
        element: <Stack />,
      },
      {
        path: 'projects/:projectId',
        element: <Project />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>...Loading</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
