import { Box } from '@chakra-ui/react';
import PageTitle from '../components/UI/PageTitle';
import PortfolioCards from '../components/PortfolioDisplay';

export default function Portfolio() {
  return (
    <Box p={5}>
      <PageTitle title='Portfolio'/>
      <PortfolioCards/>
    </Box>
  );
}