import { useState, useEffect } from 'react';

import {
  createPortalContainer,
  removePortalContainer,
} from '@/units/portalContainer';

export default function usePortal(position) {
  const [load, setLoad] = useState(() => createPortalContainer(position));

  useEffect(() => {
    setLoad(() => createPortalContainer(position));
    return removePortalContainer;
  }, [position]);
}
