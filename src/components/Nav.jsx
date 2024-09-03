import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import Navbar from './UI/Navbar';

export default function Nav() {
  const styles = {
    color: '#DAD4B5',
    _hover: {
      textDecoration: 'none',
      color: '#F2E8C6',
    },
  };

  return (
    <Navbar
      links={[
        <Link key='about-me' as={RouterLink} to='/' {...styles}>
          About Me
        </Link>,
        <Link key='portfolio' as={RouterLink} to='/portfolio' {...styles}>
          Portfolio
        </Link>,
        <Link key='resume' as={RouterLink} to='/resume' {...styles}>
          Resume
        </Link>,
        <Link key='contact' as={RouterLink} to='/contact' {...styles}>
          Contact
        </Link>,
      ]}
    />
  );
}