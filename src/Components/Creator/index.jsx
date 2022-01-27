import React, { useContext } from 'react';

import { ToastContext } from '@/Contexts/ToastContext';
import { colors } from '@/consts';

import { Button, Container } from './style';

const { SUCCESS_COLOR, ERROR_COLOR, WARNING_COLOR, INFO_COLOR } = colors;

export default function Creator({ config }) {
  const { addToast } = useContext(ToastContext);

  return (
    <Container>
      <Button
        style={{ background: SUCCESS_COLOR }}
        onClick={() => addToast('success', 'success toast', config)}
      >
        create success toast
      </Button>
      <Button
        style={{ background: ERROR_COLOR }}
        onClick={() => addToast('error', 'error toast', config)}
      >
        create error toast
      </Button>
      <Button
        style={{ background: WARNING_COLOR }}
        onClick={() => addToast('warning', 'warning toast', config)}
      >
        create warning toast
      </Button>
      <Button
        style={{ background: INFO_COLOR }}
        onClick={() => addToast('info', 'info toast', config)}
      >
        create info toast
      </Button>
    </Container>
  );
}
