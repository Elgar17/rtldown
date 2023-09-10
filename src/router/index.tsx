// import React from 'react'
import Index from '@/pages/index'
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
]

export default routes
