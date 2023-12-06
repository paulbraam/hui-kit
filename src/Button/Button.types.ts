import { ThemeColorGroup } from '../types';

export enum ButtonSizes {
  SMALL = 'small',
  LARGE = 'large'
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof ThemeColorGroup;
  size: ButtonSizes;
}
