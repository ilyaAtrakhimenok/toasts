const CANCEL_SIZE = 16;
const ICON_SIZE = 32;
const TEXT_SIZE = 20;


const ERROR_ICON = `"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cg transform='translate(0.198 0.198)'%3E%3Cpath class='a' d='M63.8,59.986,52.321,48.5a29.7,29.7,0,1,0-3.816,3.816L59.988,63.8ZM5.262,29.533A24.271,24.271,0,1,1,29.533,53.8,24.271,24.271,0,0,1,5.262,29.533Z' transform='translate(0 0)'/%3E%3Cpath class='a' d='M67.251,55.566a2.734,2.734,0,0,0-2.445-1.511h-.784a18.942,18.942,0,0,0,.59-2.734h5.661V45.853H64.612a18.941,18.941,0,0,0-.59-2.734h.784a2.734,2.734,0,0,0,2.445-1.511l2.734-5.468L65.094,33.7l-1.978,3.956h-1.8a14.916,14.916,0,0,0-2.49-2.619,8.2,8.2,0,1,0-15.375,0,14.924,14.924,0,0,0-2.489,2.619h-1.8L37.179,33.7l-4.89,2.445,2.734,5.468a2.734,2.734,0,0,0,2.445,1.511h.784a18.942,18.942,0,0,0-.59,2.734H32v5.468h5.661a18.942,18.942,0,0,0,.59,2.734h-.784a2.734,2.734,0,0,0-2.445,1.511l-2.734,5.468,4.89,2.445,1.978-3.956h1.8A12.778,12.778,0,0,0,51.137,64.99a12.778,12.778,0,0,0,10.177-5.468h1.8l1.978,3.956,4.89-2.445ZM48.4,32.184a2.734,2.734,0,0,1,5.468,0,2.768,2.768,0,0,1-.025.325,11.461,11.461,0,0,0-5.417,0A2.766,2.766,0,0,1,48.4,32.184Zm2.734,27.338c-4.522,0-8.2-4.905-8.2-10.935s3.679-10.935,8.2-10.935,8.2,4.905,8.2,10.935S55.659,59.522,51.137,59.522Z' transform='translate(-21.558 -15.912)'/%3E%3C/g%3E%3C/svg%3E"`;
const INFO_ICON = `"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Ccircle class='a' cx='3.442' cy='3.442' r='3.442' transform='translate(28.558 43.702)'/%3E%3Cpath class='a' d='M32,0A32,32,0,1,0,64,32,31.983,31.983,0,0,0,32,0Zm0,59A27,27,0,1,1,59,32,26.985,26.985,0,0,1,32,59Z'/%3E%3Cpath class='a' d='M187.016,128.5A11.028,11.028,0,0,0,176,139.516a2.754,2.754,0,0,0,5.508,0,5.508,5.508,0,1,1,5.508,5.508,2.754,2.754,0,0,0-2.754,2.754v6.885a2.754,2.754,0,0,0,5.508,0v-4.479a11.016,11.016,0,0,0-2.754-21.683Z' transform='translate(-155.016 -113.572)'/%3E%3C/svg%3E"`;
const SUCCESS_ICON = `"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='a' d='M32,0A32,32,0,1,0,64,32,32.036,32.036,0,0,0,32,0Zm0,61.538A29.538,29.538,0,1,1,61.538,32,29.573,29.573,0,0,1,32,61.538Z'/%3E%3Cpath class='a' d='M49.5,15.336,27.547,32.626,14.32,25.219a1.873,1.873,0,0,0-2.007.156.817.817,0,0,0,.223,1.406l14.286,8a1.846,1.846,0,0,0,.893.219,1.748,1.748,0,0,0,1.069-.336l22.857-18a.809.809,0,0,0-.119-1.411A1.882,1.882,0,0,0,49.5,15.336Z' transform='translate(0 5.625)'/%3E%3C/svg%3E"`;
const WARNING_ICON = `"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cg transform='translate(0 -20.882)'%3E%3Cg transform='translate(0 20.882)'%3E%3Cpath d='M221.823,333.382a3.6,3.6,0,0,0,0,7.2,3.6,3.6,0,0,0,0-7.2Z' transform='translate(-189.82 -288.408)'/%3E%3Cpath d='M62.442,78.607a13.288,13.288,0,0,0,.026-12.434l-20.6-39.03a10.891,10.891,0,0,0-19.708-.014L1.529,66.2a13.4,13.4,0,0,0,.039,12.506A11.117,11.117,0,0,0,11.4,84.882H52.549A11.2,11.2,0,0,0,62.442,78.607Zm-4.473-2.821a6.142,6.142,0,0,1-5.433,3.44H11.383a6.054,6.054,0,0,1-5.368-3.368A7.366,7.366,0,0,1,6,68.993L26.631,29.934a5.944,5.944,0,0,1,10.762.014L58.009,69.008A7.268,7.268,0,0,1,57.969,75.786Z' transform='translate(0 -20.882)'/%3E%3Cpath d='M220.5,157.278a3.913,3.913,0,0,0-2.778,3.929c.086,1.137.158,2.288.245,3.425.245,4.332.489,8.577.734,12.909a2.636,2.636,0,0,0,2.691,2.533,2.691,2.691,0,0,0,2.691-2.619c0-.892,0-1.713.086-2.619.158-2.778.331-5.555.489-8.333.086-1.8.245-3.6.331-5.4a4.444,4.444,0,0,0-.331-1.8A3.607,3.607,0,0,0,220.5,157.278Z' transform='translate(-189.392 -137.561)'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"`;

const SUCCESS_COLOR = '#37E29A';
const ERROR_COLOR = '#E25837';
const WARNING_COLOR = '#F4E048';
const INFO_COLOR = '#9A40D3';

const SUCCESS_TITLE = 'success';
const ERROR_TITLE = 'error';
const WARNING_TITLE = 'warning';
const INFO_TITLE = 'information';

const TEXT_COLOR_LIGHT = '#ffffff';
const TEXT_COLOR_DARK = '#000000';

const POSITION_TOP_LEFT = 'top: 10px; left: 10px';
const POSITION_TOP_RIGHT = 'top: 10px; right: 10px';
const POSTION_BOTTOM_LEFT = 'bottom: 10px; left: 10px';
const POSTION_BOTTOM_RIGHT = 'bottom: 10px; right: 10px';
const POSITION_TOP_MIDDLE = 'top: 10px; left: 40%';
const POSITION_BOTTOM_MIDDLE = 'bottom: 10px; left: 40%';

const DEFAULT_WIDTH = 340;
const DEFAULT_HEIGHT = 75;
const DEFAULT_SPACING = 0;
const DEFAULT_TIMING = 0;
const DEFAULT_ANIMATION = 'side-push'
const DEFAULT_DURATION = 1.5


export const MOBILE = 568;

export const TOAST_BORDER_RADIUS = 7;
export const TOAST_PADDING = 10;
export const TOAST_GRID_COLUMNS = '18% 72% 10%';
export const TOAST_FONT = 'helvetica';
export const TOAST_SHADOW = '5px 5px 10px 2px rgba(11,11,11,0.3)'
export const TOAST_CANCEL_SIZE = 18;

export const positions = {
    POSITION_TOP_LEFT,
    POSITION_TOP_RIGHT,
    POSTION_BOTTOM_LEFT,
    POSTION_BOTTOM_RIGHT,
    POSITION_TOP_MIDDLE,
    POSITION_BOTTOM_MIDDLE
}

export const defaults = {
    DEFAULT_WIDTH,
    DEFAULT_HEIGHT,
    DEFAULT_SPACING,
    DEFAULT_TIMING,
    DEFAULT_ANIMATION,
    DEFAULT_DURATION
}

export const textColors = { TEXT_COLOR_DARK, TEXT_COLOR_LIGHT };
export const sizes = { CANCEL_SIZE, ICON_SIZE, TEXT_SIZE };
export const icons = { ERROR_ICON, INFO_ICON, SUCCESS_ICON, WARNING_ICON };
export const colors = { SUCCESS_COLOR, ERROR_COLOR, WARNING_COLOR, INFO_COLOR };
export const titles = { SUCCESS_TITLE, ERROR_TITLE, WARNING_TITLE, INFO_TITLE };
