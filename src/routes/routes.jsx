import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import { Error, Home, Login } from '../pages'

const routes = [
  {
    path: '/all',
    element: <h1>All</h1>,
  },
  {
    path: '/design',
    element: <h1>Design</h1>,
  },
  {
    path: '/ux',
    element: <h1>UX</h1>,
  },
  {
    path: '/ui',
    element: <h1>UI</h1>,
  },
  {
    path: '/typography',
    element: <h1>Typography</h1>,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Error />,
  },
]

export const MainRoutes = () => {
  const elements = useRoutes(routes)
  return elements
}
