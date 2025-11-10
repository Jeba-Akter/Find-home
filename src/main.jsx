import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './Layout/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout /> ,
  },
  // Children[
  //   {
  //     path:"/",
  //     element:,
  //   }
  // ]
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
