import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark', // Start in dark mode
  useSystemColorMode: false, // Disable system mode so it stays in dark mode on load
};

const theme = extendTheme({
  config,
  colors: {
    my: { 
      50: '',
      100: '',
      200: '#F2E8C6', // Dark Theme, Red Main Color
      300: '#DAD4B5', // Dark Theme, Red Hover
      400: '',
      500: '#982B1C', // Light Theme, Tan Main Color
      600: '#800000', // Light Theme, Tan Hover
      700: '',
      800: '',
      900: '',
    },
  },
  components: {
    Button: {
      variants: {
        solid: (props) => ({
          color: props.colorMode === 'dark' ? 'my.500' : 'my.200',
        }),
      },
    },
  },
});



export default theme;