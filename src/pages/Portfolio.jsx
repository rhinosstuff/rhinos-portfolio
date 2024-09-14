import { Box, Divider } from '@chakra-ui/react';
import PageTitle from '../components/UI/PageTitle';
import ProjectCards from '../components/ProjectDisplay';

export default function Portfolio() {
  return (
    <Box p={5} mx='auto' maxW='1200px'>
      <PageTitle title='My Projects'/>
      <ProjectCards/>
    </Box>
  );
}