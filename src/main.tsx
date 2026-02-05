import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './app/Router/Router'
import Provider from './app/Provider/Provider'

createRoot(document.getElementById('root')!).render(
  <Provider>
  <RouterProvider router={router}></RouterProvider>
  </Provider>
)
