import { icons, colors, titles, textColors } from '@/consts';

const { ERROR_ICON, SUCCESS_ICON, WARNING_ICON, INFO_ICON } = icons;
const { SUCCESS_COLOR, ERROR_COLOR, WARNING_COLOR, INFO_COLOR } = colors;
const { SUCCESS_TITLE, ERROR_TITLE, WARNING_TITLE, INFO_TITLE } = titles;
const { TEXT_COLOR_DARK, TEXT_COLOR_LIGHT } = textColors;

export default function getDefaultToastValues(type) {
  switch (type) {
    case 'success':
      return [SUCCESS_COLOR, SUCCESS_ICON, SUCCESS_TITLE, TEXT_COLOR_LIGHT];
    case 'error':
      return [ERROR_COLOR, ERROR_ICON, ERROR_TITLE, TEXT_COLOR_LIGHT];
    case 'warning':
      return [WARNING_COLOR, WARNING_ICON, WARNING_TITLE, TEXT_COLOR_DARK];
    case 'info':
      return [INFO_COLOR, INFO_ICON, INFO_TITLE, TEXT_COLOR_LIGHT];
    default:
      throw new Error("Expected valid toast's type");
  }
}
