import getDefaultToastValues from './units/defaultToasts';

import { sizes } from '@/consts';

const { ICON_SIZE, TEXT_SIZE } = sizes;

export default class Toaster {
  static #IDENTIFIER = 0;
  static defineUniqId() {
    return Toaster.#IDENTIFIER++;
  }

  #id;
  #isAnimated;

  constructor(type, text, properties) {
    const [color, icon, title, textColor] = getDefaultToastValues(type);
    if (!type || !text) {
      throw new Error("Expected required toast's parameters: type and text.");
    }
    this.type = type;
    this.text = text;
    ({
      width: this.width = 340,
      height: this.height = 75,
      title: this.title = title,
      color: this.color = color,
      textColor: this.textColor = textColor,
      textSize: this.textSize = TEXT_SIZE,
      spacing: this.spacing = 0,
      timing: this.timing = 0,
      icon: this.icon = icon,
      iconSize: this.iconSize = ICON_SIZE,
      id: this.#id = Toaster.defineUniqId(),
      isAnimated: this.#isAnimated = true,
      animationName: this.animationName = 'side-push',
      animationDuration: this.animationDuration = 1.5,
    } = properties);
  }

  get id() {
    return this.#id;
  }
  set isAnimated(a) {
    this.#isAnimated = Boolean(a);
  }
  get isAnimated() {
    return this.#isAnimated;
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
