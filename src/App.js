import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import RootLayout from './Pages/RootLayout'
import Home from './Pages/Home'
import Game from './Pages/Game'
import Error from './Pages/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/game', element: <Game /> },
    ],
    errorElement: <Error />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
