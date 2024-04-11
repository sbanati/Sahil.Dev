import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import './index.css'

import App from './App.jsx';
// Importing Pages 
import Error from './pages/Error.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import About from './pages/About.jsx';





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Projects',
        element: <Projects />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
