# Toast library for React application

## Installation

```
$ npm install --save react-toasts-atr
```

## Storybook

Here you can play with toasts and find configuration description: 
[Storybook](https://ilyaatrakhimenok.github.io/toastlib/?path=/story/app--toasts)

## Usage

Wrap the container where you are going to use Toasts in a TaostProvider
```jsx
import React from 'react'
import {ToastProvider} from 'react-toasts-atr'


export default function App(){
    return (
        <ToastProvider>
            <Component />
        </ToastProvider>
    )
}
```
Get **addToast** function from a ToastContext in a Component
```jsx
import React, { useContext } from 'react'
import { ToastContext } from 'react-toasts-atr'

const config = {
    ...
}

export default function Component() {
    const { addToast } = useContext(ToastContext);
    return (
            <button
                onClick={() => addToast('success', 'success toast', config)}
            >
                create toast
            </button>
    )
}
```




