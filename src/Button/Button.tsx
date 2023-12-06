import React from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { ButtonProps } from './Button.types';
import { calculateButtonPaddings } from './Button.utils';
import { createComponentClassName, getContrastColor } from '../utils';

const BUTTON_COMPONENT_NAME = 'Button';

export const ButtonClass = createComponentClassName(BUTTON_COMPONENT_NAME);

const StyledButton = styled('button').attrs((props) => ({
  ...props.theme.components.Button.defaultProps,
  ...props,
  className: clsx([ButtonClass, props.className])
}))`
  &.${ButtonClass} {
    padding: ${calculateButtonPaddings};
    background-color: ${(props) => props.theme.colors[props.variant].main};
    color: ${(props) => getContrastColor(props.theme.colors[props.variant].main)};
    border-radius: 5px;
    border-color: ${(props) => props.theme.colors[props.variant].light};
  }
`;

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <StyledButton type="button" {...rest}>
    {children}
  </StyledButton>
);

Button.displayName = BUTTON_COMPONENT_NAME;

export default Button;
