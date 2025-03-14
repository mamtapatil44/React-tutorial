import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import Profiles from './components/Profiles.jsx'
import Profile from './components/Profile.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    errorElement: <div>Page Not found</div>,
  },
  {
    path: '/profiles',
    element: <Profiles/>,
    children: [
      {
        path: '/profiles/:profileId',
        element: <Profile/>,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={routes} />
  </StrictMode>,
)
