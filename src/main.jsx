import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Root from './assets/Root'
import Home from './pages/Home/Home'
import Service from './pages/Service/Service'
import Blogs from './pages/Blogs/Blogs'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/service',
        Component: Service
      },
      {
        path: '/blogs',
        Component: Blogs
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
)
