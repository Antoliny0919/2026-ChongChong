import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Antoliny from './Antoliny';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/antoliny',
    element: <Antoliny />,
  },
]);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
