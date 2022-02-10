import React, { useCallback, useState, useMemo } from 'react';

import ToastList from '@/Components/ToastList';
import usePortal from '@/hooks/usePortal';
import Toaster from '@/Toaster';
import ToastBoundary from '@/ErrorBoundary/ToastBoundary';

export const ToastContext = React.createContext();

export function ToastProvider(props) {
  
  const { children, position = 'bottom-right', limit = 5 } = props;

  const [toastList, setToastList] = useState([]);

  usePortal(position);

  const addToast = useCallback((type, text, config) => {
    setToastList((prevList) => {
      if (prevList.length < limit) {
        return [new Toaster(type, text, config || {}), ...prevList];
      } else {
        return prevList;
      }
    });
  }, []);

  const removeToast = useCallback((id) => {
    setToastList((prevList) => {
      return prevList.filter((item) => {
        return item.id !== id;
      });
    });
  },[]);

  const config = useMemo(()=>{
    return {
      addToast,
      removeToast,
      position
    }
  }, [position])

  return (
    <ToastContext.Provider
      value={config}
      {...props}
    >
      <ToastBoundary>
        <ToastList toastList={toastList} />
        {children}
      </ToastBoundary>
    </ToastContext.Provider>
  );
}
