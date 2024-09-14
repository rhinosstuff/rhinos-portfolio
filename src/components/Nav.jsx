import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import Navbar from './UI/Navbar';

export default function Nav() {
  const location = useLocation();
  
  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  // Custom CSS for hover and active tab
  const linkStyles = (path) => ({
    color: isActive(path) ? 'my.200' : 'my.300',
    fontWeight: isActive(path) ? 'bold' : 'normal',
    _hover: {
      textDecoration: 'none',
      color: 'my.200',
    },
  });

  return (
    <Navbar
      links={[
        <Link key='about-me' as={RouterLink} to='/' {...linkStyles('/')}>
          About Me
        </Link>,
        <Link key='portfolio' as={RouterLink} to='/portfolio' {...linkStyles('/portfolio')}>
          Portfolio
        </Link>,
        <Link key='resume' as={RouterLink} to='/resume' {...linkStyles('/resume')}>
          Resume
        </Link>,
        <Link key='contact' as={RouterLink} to='/contact' {...linkStyles('/contact')}>
          Contact
        </Link>,
      ]}
    />
  );
}