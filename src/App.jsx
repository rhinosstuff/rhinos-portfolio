import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';

export default function App() {
  return (
    <Box>
      <Nav />
      <Box p={4}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}