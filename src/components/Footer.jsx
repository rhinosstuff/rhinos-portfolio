import { Flex, useColorMode, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';
import { spin, bounce, scale } from '../components/UI/Animations';

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Flex justifyContent='center' mb={25}>
      <IconButton
        as='a'
        href='https://github.com/rhinosstuff' 
        target='_blank'
        icon={<FaGithub />}
        variant='ghost'
        aria-label='GitHub'
        color={colorMode === 'light' ? 'blackAlpha.900' : 'yellow.200'} 
        _hover={{
          animation: `${spin} 4s linear infinite`,
        }}
        fontSize='4xl'
      />
      <IconButton
        as='a'
        href='https://www.linkedin.com/in/rhinosstuff/' 
        target='_blank'
        icon={<FaLinkedin />}
        variant='ghost'
        aria-label='LinkedIn'
        color={colorMode === 'light' ? 'blue.600' : 'blue.200'} 
        _hover={{
          animation: `${bounce} 0.6s ease infinite`,
        }}
        fontSize='4xl'
      />
      <IconButton
        as='a'
        href='https://www.hackerrank.com/profile/rhinosstuff' 
        target='_blank'
        icon={<FaHackerrank />}
        variant='ghost'
        aria-label='LinkedIn'
        color={colorMode === 'light' ? 'green.600' : 'green.200'} 
        _hover={{
          animation: `${scale} 0.6s ease infinite`,
        }}
        fontSize='4xl'
      />
    </Flex>
  )
}