import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'swiper/swiper-bundle.css'
import './index.css'
import 'react-toastify/ReactToastify.css'
import LadigPage from './pages/ladingPage/index.tsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
const routes = createBrowserRouter([
  {
    path: "/",
    element: <LadigPage />,
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={routes}>
    </RouterProvider>
  </StrictMode>
);
