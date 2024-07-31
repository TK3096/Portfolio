import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/components/layout/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <div>About</div>,
      },
      {
        path: 'project',
        element: <div>Project</div>,
      },
      {
        path: 'contact',
        element: <div>Contact</div>,
      },
    ],
  },
])

export default router
