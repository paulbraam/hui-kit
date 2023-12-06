import { DefaultTheme } from 'styled-components';
import { ButtonSizes } from '../Button';

export const theme: DefaultTheme = {
  colors: {
    primary: {
      dark: '#211374',
      main: '#472fdb',
      light: '#9382ff'
    },
    secondary: {
      dark: '',
      main: '#472fdb',
      light: ''
    },
    tertiary: {
      dark: '',
      main: '#472fdb',
      light: ''
    }
  },
  sizeUnit: 10,
  components: {
    Button: {
      defaultProps: {
        variant: 'primary',
        size: ButtonSizes.SMALL
      }
    }
  }
};
