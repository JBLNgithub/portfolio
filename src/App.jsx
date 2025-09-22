import React from 'react'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import StockemoisePage from './pages/StockemoisePage.jsx'
import PortfolioPage from './pages/PortfolioPage.jsx'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/stockemoise' element={<StockemoisePage />} />
        <Route path='/port-folio' element={<PortfolioPage />} />

        {/*TODO this is specifically for gh-pages, make it a redirect link later*/}
        <Route path='/portfolio' element={<HomePage />} />


        <Route path='/*' element={<NotFoundPage />} />
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App