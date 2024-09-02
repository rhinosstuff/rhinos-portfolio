import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <Box>
      <Nav />
      <Box p={4}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;