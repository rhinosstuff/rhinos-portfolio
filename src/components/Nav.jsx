import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import Navbar from './UI/Navbar';

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key="about-me" as={RouterLink} to="/" color="white" _hover={{ textDecoration: "underline" }}>
          About Me
        </Link>,
        <Link key="portfolio" as={RouterLink} to="/portfolio" color="white" _hover={{ textDecoration: "underline" }}>
          Portfolio
        </Link>,
        <Link key="resume" as={RouterLink} to="/resume" color="white" _hover={{ textDecoration: "underline" }}>
          Resume
        </Link>,
        <Link key="contact" as={RouterLink} to="/contact" color="white" _hover={{ textDecoration: "underline" }}>
          Contact
        </Link>,
      ]}
    />
  );
}