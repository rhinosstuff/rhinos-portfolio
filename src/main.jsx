import * as React from 'react'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import './App.css';

// Importing my pages
import App from './App';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

// Define the routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
]);

// Render the application with ChakraProvider and RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);