import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './HomePage/HomePage.jsx'
import UploadResumePage from './UploadResumePage/UploadResumePage.jsx'
import DisplayResultsPage from './DisplayResultsPage/DisplayResultsPage.jsx'


const router = createBrowserRouter([
  {
  path: '/',
  element: <HomePage />,
  errorElement: <div>404 Not Found</div>
},
{
  path: '/UploadResume',
  element: <UploadResumePage />,
  errorElement: <div>404 Not Found</div>
},
{
  path: '/DisplayResults',
  element: <DisplayResultsPage />,
  errorElement: <div>404 Not Found</div>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
