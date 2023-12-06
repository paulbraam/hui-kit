import { DEFAULT_UI_CLASS_PREFIX } from '../constants';

export const createComponentClassName = (className: string) => DEFAULT_UI_CLASS_PREFIX + className;

export const getContrastColor = (
  hexColor: string,
  threshold = 128,
  primaryColor = '#000000',
  secondaryColor = '#FFFFFF'
) => {
  // convert hex color to RGB values
  const red = parseInt(hexColor.substring(1, 3), 16);
  const green = parseInt(hexColor.substring(3, 5), 16);
  const blue = parseInt(hexColor.substring(5, 7), 16);

  // calculate the perceived brightness of the color
  const perceivedBrightness = (red * 299 + green * 587 + blue * 114) / 1000;

  // choose the contrasting color based on the perceived brightness
  if (perceivedBrightness > threshold) {
    return primaryColor;
  }
  return secondaryColor;
};
