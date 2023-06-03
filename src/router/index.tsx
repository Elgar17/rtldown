// import React from 'react'
import Index from '@/pages'
import OpenFile from '@/pages/open-file'

// const LoadingFC = (com: JSX.Element) => (
//   <React.Suspense fallback={<div>Loading...</div>}>{com}</React.Suspense>
// )

const routes = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/open',
    element: <OpenFile />,
  },
  //   {
  //     path: '/',
  //     element: LoadingFC(<Home />),
  // children: [
  //   {
  //     path: '/new',
  //     element: LoadingFC(<User />),
  //   },
  // ],
  //   },
  //   {
  //     path: '/login',
  //     element: LoadingFC(<Login />),
  //   },
]

export default routes
