import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/components/layout/RootLayout'

import AboutPage from '@/pages/AboutPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AboutPage />,
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
