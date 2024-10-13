import {theme, extendTheme} from '@chakra-ui/react';
// import "@fontsource/noto-sans/400.css"
// import "@fontsource/noto-sans/700.css"
import "@fontsource/montserrat/400.css"
import "@fontsource/montserrat/700.css"
import {Button} from "./components/Button";
import {customColors} from "./colors";

const config = {
  initialColorMode: 'light',
};

const breakpoints = {
  xs: '320px',
  sm: '480px',
  md: '768px',
  lg: '1280px',
};

export const customTheme = extendTheme({
  config, breakpoints,
  fonts: {
    body: `'Verdana', sans-serif`, // look like Verdana
    primary: `'Verdana', sans-serif`, // look like Verdana
    secondary: `'Montserrat', sans-serif`, // look like Gotham Pro
  },
  colors: {
    ...theme.colors,
    ...customColors,
  },
  components: {
    Button,
  }
});
