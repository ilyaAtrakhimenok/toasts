import { useState, useEffect } from 'react';

const positions = {
  'top-left': 'top: 10px; left: 10px',
  'top-right': 'top: 10px; right: 10px',
  'bottom-left': 'bottom: 10px; left: 10px',
  'bottom-right': 'bottom: 10px; right: 10px',
  'top-middle': 'top: 10px; left: 40%',
  'bottom-middle': 'bottom: 10px; left: 40%',
};

const createPortalContainer = (pos) => {
  if (!document.getElementById('toast-portal')) {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'toast-portal');
    portal.style = `position: fixed; width: fit-content; height: auto; z-index:10000; ${positions[pos]};`;
    document.getElementById('root').after(portal);
    return true;
  }
  return false;
};

const removePortalContainer = () => {
  const portal = document.getElementById('toast-portal');
  if (portal) {
    portal.remove();
  }
};

export default function usePortal(position) {
  const [load, setLoad] = useState(() => createPortalContainer(position));

  useEffect(() => {
    setLoad(() => createPortalContainer(position));
    return removePortalContainer;
  }, [position]);
}
