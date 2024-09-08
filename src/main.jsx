import * as React from 'react'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importing my CSS
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

const colors = {
  my: {
    800: '#800000',
    700: '#982B1C',
    200: '#DAD4B5',
    100: '#F2E8C6',
  },
}

const theme = extendTheme({ colors })


// Render the application with ChakraProvider and RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);