import React from 'react';

import Toast from '@/Components/Toast';
import { ToastProvider } from '@/Contexts/ToastContext';
import Toaster from '@/Toaster';
import { sizes, icons } from '@/consts';

const { SUCCESS_ICON } = icons;
const { ICON_SIZE, TEXT_SIZE } = sizes;

export default {
  title: 'Custom Toast',
  component: Toast,
  argTypes: {
    type: {
      defaultValue: 'success',
      description: "Toast's type",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'success' },
      },
      control: {
        type: 'select',
        options: ['success', 'error', 'warning', 'info'],
      },
    },
    text: {
      defaultValue: 'Something important...',
      control: { type: 'text' },
    },
    width: {
      defaultValue: 340,
      description: 'Toast container width',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '340px' },
      },
      control: { type: 'number' },
    },
    height: {
      defaultValue: 75,
      description: 'Toast container height',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '75px' },
      },
      control: { type: 'number' },
    },
    title: {
      defaultValue: 'title',
      description: "Toast's title",
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'title' },
      },
      control: { type: 'text' },
    },
    color: {
      defaultValue: '#AEAEF0',
      description: "Toast's background color",
      table: {
        type: { summary: 'color' },
      },
      control: { type: 'color' },
    },
    spacing: {
      defaultValue: [20, 10, 10, 10],
      description: 'Space around toast',
      table: {
        type: { summary: 'array [x,x,x,x]' },
        defaultValue: { summary: '[20,10,10,10]' },
      },
      control: { type: 'array' },
    },
    icon: {
      defaultValue: SUCCESS_ICON,
      description: 'Icon',
      table: {
        type: { summary: 'String svg icon data:image/svg+xml...' },
        defaultValue: { summary: 'Success icon as an example' },
      },
      control: { type: 'text' },
    },
    textColor: {
      defaultValue: 'black',
      control: { type: 'color' },
    },
  },
};

export const Template = (args) => {
  const toast = new Toaster(args.type, args.text, args);
  toast.isAnimated = false;
  return (
    <ToastProvider>
      <Toast obj={toast} />
    </ToastProvider>
  );
};

Template.args = {
  textColor: 'black',
  textSize: TEXT_SIZE,
  iconSize: ICON_SIZE,
};
