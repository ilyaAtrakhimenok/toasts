import React from 'react';

import { GlobalStyle } from '@/globalStyles';
import { ToastProvider } from '@/Contexts/ToastContext';

import Creator from '../Components/Creator';

export default {
  title: 'App',
  component: Creator,
  argTypes: {
    position: {
      defaultValue: 'bottom-right',
      description: 'Position of toast container',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'bottom-right' },
      },
      control: {
        type: 'select',
        options: [
          'bottom-right',
          'bottom-left',
          'top-right',
          'top-left',
          'top-middle',
          'bottom-middle',
        ],
      },
    },
    limit: {
      defaultValue: '5',
      description: 'Maximum toasts in container',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 5 },
      },
      control: { type: 'number' },
    },
    animationName: {
      label: 'Type of animation',
      defaultValue: 'side-push',
      description: 'Type of animation',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'side-push' },
      },
      control: {
        type: 'select',
        options: ['side-push', 'transparency', 'increase'],
      },
    },
    animationDuration: {
      label: 'Animation duration',
      defaultValue: 1.5,
      description: 'Animation duration (seconds)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1.5s' },
      },
      control: { type: 'number' },
    },
    timing: {
      label: 'Disapperance time',
      defaultValue: 0,
      description: 'After this time the toast will disappear (ms)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
      control: { type: 'number' },
    },
  },
};

export const toasts = (args) => {
  const { limit, position } = args;
  return (
    <ToastProvider position={position} limit={limit}>
      <GlobalStyle />
      <Creator config={args} />
    </ToastProvider>
  );
};
