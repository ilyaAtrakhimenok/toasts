import styled from 'styled-components';

import animation from './animation';

const space = (props) => {
  const marg = props.config.spacing;
  if (marg instanceof Array) {
    return `${marg[0] || 30}px ${marg[1] || 10}px ${marg[2] || 5}px ${
      marg[3] || 10
    }px`;
  } else {
    return marg ? `${marg}px` : '30px 10px 5px 10px';
  }
};

export const ToastContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 18% 72% 10%;
  align-items: center;
  width: ${(props) => props.config.width}px;
  height: ${(props) => props.config.height}px;
  padding: 10px;
  margin: ${space};
  border-radius: 7px;
  box-shadow: 5px 5px 10px 2px rgba(11, 11, 11, 0.3);
  background-color: ${(props) => props.config.color};
  animation-name: ${(props) =>
    props.config.isAnimated
      ? animation(props.config.animationName, props.position)
      : 'none'};
  animation-duration: ${(props) => props.config.animationDuration}s;
  color: ${(props) => props.config.textColor};
  @media (max-width: 568px) {
    width: ${(props) => props.config.width / 1.3}px;
    height: ${(props) => props.config.height / 1.3}px;
    border-radius: 5px;
  }
`;

export const Icon = styled.div`
  background-image: url(${(props) => props.icon});
  width: ${(props) => props.iconSize}px;
  height: ${(props) => props.iconSize}px;
  @media (max-width: 568px) {
    width: ${(props) => props.iconSize / 1.2}px;
    height: ${(props) => props.iconSize / 1.2}px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  font-family: helvetica;
  font-size: ${(props) => props.textSize}px;
  @media (max-width: 568px) {
    font-size: ${(props) => props.textSize / 1.4}px;
  }
`;

export const Title = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  font-size: ${(props) => props.textSize / 1.5}px;
  color: black;
`;

export const Cancel = styled.button`
  justify-self: end;
  align-self: start;
  background: none;
  border: none;
  font-size: 18px;
  color: inherit;
  &:hover {
    cursor: pointer;
  }
`;
