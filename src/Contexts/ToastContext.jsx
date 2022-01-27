import React, { useState } from 'react';

import ToastList from '@/Components/ToastList';
import usePortal from '@/hooks/usePortal';
import Toaster from '@/Toaster';
import ToastBoundary from '@/ErrorBoundary/ToastBoundary';

export const ToastContext = React.createContext();

export function ToastProvider(props) {
  const { children, position = 'bottom-right', limit = 5 } = props;

  const [toastList, setToastList] = useState([]);

  usePortal(position);

  const addToast = (type, text, config) => {
    setToastList((prevList) => {
      if (prevList.length < limit) {
        return [new Toaster(type, text, config || {}), ...prevList];
      } else {
        return prevList;
      }
    });
  };

  const removeToast = (id) => {
    setToastList((prevList) => {
      return prevList.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <ToastContext.Provider
      value={{ addToast, removeToast, position }}
      {...props}
    >
      <ToastBoundary>
        <ToastList toastList={toastList} />
        {children}
      </ToastBoundary>
    </ToastContext.Provider>
  );
}
