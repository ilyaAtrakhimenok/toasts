import styled from 'styled-components';

import animation from './animation';

import {
  MOBILE,
  TOAST_BORDER_RADIUS,
  TOAST_PADDING,
  TOAST_GRID_COLUMNS,
  TOAST_SHADOW,
  TOAST_FONT,
  TOAST_CANCEL_SIZE
} from '@/consts'

const space = (props) => {
  const marg = props.config.spacing;
  if (marg instanceof Array) {
    return `${marg[0] || 30}px ${marg[1] || 10}px ${marg[2] || 5}px ${marg[3] || 10
      }px`;
  } else {
    return marg ? `${marg}px` : '30px 10px 5px 10px';
  }
};

const width = (props) => props.config.width
const height = (props) => props.config.height
const animationName = (props) => props.config.isAnimated
  ? animation(props.config.animationName, props.position)
  : 'none'
const background = (props) => props.config.color
const duration = (props) =>  props.config.animationDuration
const textColor = (props) =>   props.config.textColor;
const textSize = (props) => props.textSize
const icon = (props) => props.icon;
const iconSize = (props) => props.iconSize;
const TITLE_TOP = -20;
const TITLE_LEFT = 0;

export const ToastContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: ${TOAST_GRID_COLUMNS};
  align-items: center;
  width: ${width}px;
  height: ${height}px;
  padding: ${TOAST_PADDING}px;
  margin: ${space};
  border-radius: ${TOAST_BORDER_RADIUS}px;
  box-shadow: ${TOAST_SHADOW};
  background-color: ${background};
  animation-name: ${animationName};
  animation-duration: ${duration}s;
  color: ${textColor};
  @media (max-width: ${MOBILE}px) {
    width: ${width / 1.3}px;
    height: ${height / 1.3}px;
    border-radius: 5px;
  }
`;

export const Icon = styled.div`
  background-image: url(${icon});
  width: ${iconSize}px;
  height: ${iconSize}px;
  @media (max-width: ${MOBILE}px) {
    width: ${iconSize / 1.2}px;
    height: ${iconSize / 1.2}px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-family: ${TOAST_FONT};
  font-size: ${textSize}px;
  @media (max-width: ${MOBILE}px) {
    font-size: ${textSize / 1.4}px;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: ${TITLE_TOP}px;
  left: ${TITLE_LEFT}px;
  font-size: ${textSize/ 1.5}px;
  color: black;
`;

export const Cancel = styled.button`
  justify-self: end;
  align-self: start;
  background: none;
  border: none;
  font-size: ${TOAST_CANCEL_SIZE}px;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`;
