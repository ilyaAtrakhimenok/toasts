import { positions } from '@/consts';

const {
  POSITION_TOP_LEFT,
  POSITION_TOP_RIGHT,
  POSTION_BOTTOM_LEFT,
  POSTION_BOTTOM_RIGHT,
  POSITION_TOP_MIDDLE,
  POSITION_BOTTOM_MIDDLE,
} = positions;

const position = {
  'top-left': POSITION_TOP_LEFT,
  'top-right': POSITION_TOP_RIGHT,
  'bottom-left': POSTION_BOTTOM_LEFT,
  'bottom-right': POSTION_BOTTOM_RIGHT,
  'top-middle': POSITION_TOP_MIDDLE,
  'bottom-middle': POSITION_BOTTOM_MIDDLE,
};

export const createPortalContainer = (pos) => {
  if (!document.getElementById('toast-portal')) {
    const portal = document.createElement('div');
    portal.setAttribute('id', 'toast-portal');
    portal.style = `position: fixed; width: fit-content; height: auto; z-index:10000; ${position[pos]};`;
    document.getElementById('root').after(portal);
    return true;
  }
  return false;
};

export const removePortalContainer = () => {
  const portal = document.getElementById('toast-portal');
  if (portal) {
    portal.remove();
  }
};
