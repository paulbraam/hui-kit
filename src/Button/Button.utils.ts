import { DefaultTheme, ThemedStyledProps } from 'styled-components';
import { ButtonProps, ButtonSizes } from './Button.types';

export const calculateButtonPaddings = (props: ThemedStyledProps<ButtonProps, DefaultTheme>) => {
  const { sizeUnit } = props.theme;
  return props.size === ButtonSizes.LARGE
    ? `${sizeUnit}px ${sizeUnit * 2}px`
    : `${sizeUnit / 2}px ${sizeUnit}px`;
};
