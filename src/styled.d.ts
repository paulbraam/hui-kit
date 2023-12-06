import 'styled-components';
import { ButtonSizes } from './Button';
import { ThemeColorGroup } from './types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ThemeColorGroup;
    sizeUnit: number;
    components: {
      Button: {
        defaultProps: {
          size: ButtonSizes;
          variant: keyof ThemeColorGroup;
        };
      };
    };
  }
}
