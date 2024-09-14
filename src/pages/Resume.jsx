import { Box, Button } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import PageTitle from '../components/UI/PageTitle';
import ResumePDF from '../assets/RyanO_Resume.pdf';

export default function Resume() {
  return (
    <Box p={5} mx='auto' maxW='1200px'>
      <PageTitle title='My Resume' />

      <Box as='iframe'
        src={ResumePDF} 
        width='100%' 
        height='600px'
        border='0'
      />

      <Button 
        mt={4} 
        as='a' 
        href={ResumePDF} 
        download
        colorScheme='my'
        leftIcon={<DownloadIcon />}
      >
        Download Resume
      </Button>
    </Box>
  );
}