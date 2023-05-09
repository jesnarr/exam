import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Main from './Main'

const root = createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <Main />
    </BrowserRouter>
)
