import { Flex, keyframes, useColorMode, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaHackerrank } from 'react-icons/fa';

export default function Footer() {
  const { colorMode } = useColorMode();

  // Spin animation definition
  const spin = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  `;

  // Bounce animation
  const bounce = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  `;

  // Scale animation
  const scale = keyframes`
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
  `;

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
          // color: colorMode === 'light' ? 'my.600' : 'my.600',
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
          // color: colorMode === 'light' ? 'my.600' : 'my.600',
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
          // color: colorMode === 'light' ? 'my.600' : 'my.600',
        }}
        fontSize='4xl'
      />
    </Flex>
  )
}