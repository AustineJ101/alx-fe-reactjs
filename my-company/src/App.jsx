import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "services",
        element: <Services />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  }
 
]);

function App() {

  return (
 
     <RouterProvider router={router} />
   
  )
}

export default App
