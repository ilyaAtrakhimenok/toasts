import React, { useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';

import reducer from './reducer';

export default function ToastList({ toastList }) {
  const [toasts, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (toastList.length > toasts.length) {
      dispatch({ type: 'addition', addElem: toastList[0] });
    } else if (toastList.length < toasts.length) {
      dispatch({ type: 'remove', list: toastList });
    }
  }, [toastList]);

  return (
    <React.Fragment>
      {ReactDOM.createPortal(toasts, document.getElementById('toast-portal'))}
    </React.Fragment>
  );
}
