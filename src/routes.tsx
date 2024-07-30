import { createBrowserRouter, Outlet } from 'react-router-dom'

import App from './App'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <nav>Navbar</nav>
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
      {
        path: 'contact',
        element: <div>Contact</div>,
      },
    ],
  },
])

export default router
