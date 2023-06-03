import routes from '@/router/index'
import { useRoutes } from 'react-router-dom'
import './App.css'

function App() {
  const view = useRoutes(routes)
  return <div className="App">{view}</div>
}

export default App
