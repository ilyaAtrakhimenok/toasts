import getDefaultToastValues from './units/defaultToasts';
import { sizes, defaults } from './consts';

const {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  DEFAULT_SPACING,
  DEFAULT_TIMING,
  DEFAULT_ANIMATION,
  DEFAULT_DURATION,
} = defaults;

const { ICON_SIZE, TEXT_SIZE } = sizes;

export default class Toaster {
  static _IDENTIFIER = 0;
  static defineUniqId() {
    return Toaster._IDENTIFIER++;
  }

  constructor(type, text, properties) {
    const [color, icon, title, textColor] = getDefaultToastValues(type);
    if (!type || !text) {
      throw new Error("Expected required toast's parameters: type and text.");
    }
    this.type = type;
    this.text = text;
    ({
      width: this.width = DEFAULT_WIDTH,
      height: this.height = DEFAULT_HEIGHT,
      title: this.title = title,
      color: this.color = color,
      textColor: this.textColor = textColor,
      textSize: this.textSize = TEXT_SIZE,
      spacing: this.spacing = DEFAULT_SPACING,
      timing: this.timing = DEFAULT_TIMING,
      icon: this.icon = icon,
      iconSize: this.iconSize = ICON_SIZE,
      id: this._id = Toaster.defineUniqId(),
      isAnimated: this._isAnimated = true,
      animationName: this.animationName = DEFAULT_ANIMATION,
      animationDuration: this.animationDuration = DEFAULT_DURATION,
    } = properties);
  }

  get id() {
    return this._id;
  }

  set isAnimated(a) {
    this._isAnimated = Boolean(a);
  }
  get isAnimated() {
    return this._isAnimated;
  }

  remove(removeFn) {
    this.animationName = this.animationName + '-remove';
    setTimeout(() => {
      removeFn();
    }, this.animationDuration * 1000 - 100);
  }

  timer(removeFn) {
    if (this.timing) {
      const timerId = setTimeout(() => {
        removeFn();
      }, this.timing);
      return timerId;
    } else {
      return null;
    }
  }
}
