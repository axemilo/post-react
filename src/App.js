import './global.scss'
import 'normalize.css'
import { MainRoutes } from './routes'
import { useNavigate } from 'react-router-dom'

function App() {
  return (
    <>
      <MainRoutes />
    </>
  )
}

export default App
