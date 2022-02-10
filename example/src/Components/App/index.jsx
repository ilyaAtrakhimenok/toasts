import React from 'react'
import {ToastProvider} from 'react-toasts-atr'

import Buttons from '../Buttons'
import './style.css'

export default function App(){
    return (
        <ToastProvider>
            <h1>SIMPLY REACT APP WITH TOASTS</h1>
            <Buttons/>
        </ToastProvider>
    )
}


