import React, { useContext, useEffect, useState } from 'react';

import { ToastContext } from '@/Contexts/ToastContext';

import { ToastContainer, Icon, Text, Title, Cancel } from './style';

export default function Toast({ obj }) {
  const { removeToast, position } = useContext(ToastContext);
  const [del, setDelition] = useState(false);

  const { title, icon, text, id, textSize, iconSize } = obj;

  let upX = 0;
  let downX = 0;

  useEffect(() => {
    const timerId = obj.timer(remove);
    return () => clearTimeout(timerId);
  }, []);

  const remove = () => {
    obj.remove(() => removeToast(id));
    setDelition(true);
  };

  const down = (e) => {
    downX = e.clientX;
  };

  const up = (e) => {
    upX = e.clientX;
    if (upX - downX > 100) {
      remove();
    }
  };

  return (
    <ToastContainer
      config={obj}
      position={position}
      onPointerDown={down}
      onPointerUp={up}
    >
      <Title>{title}</Title>
      <Icon icon={icon} iconSize={iconSize}></Icon>
      <Text textSize={textSize}>{text}</Text>
      <Cancel onClick={remove}>X</Cancel>
    </ToastContainer>
  );
}
