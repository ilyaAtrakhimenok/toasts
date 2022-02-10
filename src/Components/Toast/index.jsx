import React, { useContext, useEffect, useState } from 'react';
import { useCallback } from 'react';

import { ToastContext } from '@/Contexts/ToastContext';

import { ToastContainer, Icon, Text, Title, Cancel } from './style';

export default function Toast({ toaster }) {

  const { removeToast, position } = useContext(ToastContext);
  const [del, setDelition] = useState(false);

  const { title, icon, text, id, textSize, iconSize } = toaster;

  useEffect(() => {
    const timerId = toaster.timer(remove);
    return () => clearTimeout(timerId);
  }, []);

  const remove = useCallback(() => {
    toaster.remove(() => removeToast(id));
    setDelition(true);
  },[toaster]);

  return (
    <ToastContainer
      config={toaster}
      position={position}
    >
      <Title>{title}</Title>
      <Icon icon={icon} iconSize={iconSize}></Icon>
      <Text textSize={textSize}>{text}</Text>
      <Cancel onClick={remove}>X</Cancel>
    </ToastContainer>
  );
}
