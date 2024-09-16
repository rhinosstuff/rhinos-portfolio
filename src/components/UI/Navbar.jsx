import { Box, Heading, Flex, UnorderedList, ListItem, useColorMode, IconButton, Image } from '@chakra-ui/react';
import { spin, scale } from './Animations';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

import RhinoLogo from '../../assets/images/rhino.svg';

export default function Navbar({ links }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as='nav' bgGradient='linear(to-b, my.300 0%, my.500 65%, my.600 150%)' p={4}>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Flex align='center'>
          <Heading as='h1' size='xl' fontWeight='bold' color='my.300'>
            rhinosstuff
          </Heading>
          <Image src={RhinoLogo} alt='Rhino Logo' boxSize='50px' transform='scaleX(-1)' ml={3} />
          <IconButton
            aria-label='Toggle color mode'
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <IoMdMoon transform='scaleX(-1)' /> : <IoMdSunny />}
            variant='ghost'
            color={colorMode === 'light' ? 'gray.300' : 'yellow.400'} 
            _hover={{
              animation: colorMode === 'light' ? `${scale} 0.6s ease infinite` : `${spin} 4s linear infinite`,
              color: colorMode === 'light' ? 'gray.200' : 'yellow.200',
            }}
            fontSize='2xl'
          />
          
        </Flex>
        <Flex 
          direction='row'
          align='center'
          mr={{ base: 0, md: 3 }}
          ml={{ base: 0, md: 'auto' }}
          mt={{ base: 4, md: 0 }}
        >
          <UnorderedList styleType='none' display='flex' ml={0}>
            {links.map((link) => (
              <ListItem key={link.key} m={2}>
                {link}
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </Flex>
    </Box>
  );
}