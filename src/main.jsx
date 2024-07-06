// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App'
import './index.css'
import {BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Router>
        <NextUIProvider>
          <main className='overflow-x-hidden w-dvw max-md:w-dvw relative flex justify-center items-center flex-col'>
            <App />
          </main>
        </NextUIProvider>
      </Router>
  </React.StrictMode>,
)