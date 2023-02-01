import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Home'
import Routers from './routers/routers'
import "./styles/index.scss"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App>
    <Routers />
  </App>
)
