import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../view/Login';
import { Register } from '../view/Register';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);
