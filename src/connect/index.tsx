import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Connect from './Connect'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <Connect />
  </React.StrictMode>,
)
