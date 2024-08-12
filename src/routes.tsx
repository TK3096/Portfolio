import { createBrowserRouter } from 'react-router-dom'

import RootLayout from '@/components/layout/RootLayout'

import AboutPage from '@/pages/AboutPage'
import ContactPage from '@/pages/ContactPage'

import { convertUrlToBasePath } from '@/libs/utils'

const router = createBrowserRouter([
  {
    path: convertUrlToBasePath(),
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      // {
      //   path: 'project',
      //   element: <div>Project</div>,
      // },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ],
  },
])

export default router
