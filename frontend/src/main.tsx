import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, MantineProvider } from '@mantine/core'
import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomePage from './components/pages/HomePage.tsx'
import ErrorPage from './components/pages/ErrorPage.tsx'
import Testing from './components/pages/Testing.tsx'
import ProfilePage from './components/pages/ProfilePage.tsx'
import ContactUs from './components/pages/ContactUs.tsx'
import AboutUs from './components/pages/AboutUs.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: "home",
        element: <HomePage />,

      },
      {
        path: "test",
        element: <Testing />,

      },
    //   {
    //     path: "order",
    //     element: <OrderingPage />,
    //     children: [
    //       { path: "", element: <Navigate to="place" replace /> },
    //       { path: "place", element: <OrderPage /> },
    //       { path: "payment", element: <PaymentPage /> },
    //       { path: "review", element: <ConfirmationPage /> },
    //     ]
    //   },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
    ]
  },

])

const theme = createTheme({
  colors: {
    'wlw-green': [
      '#ccd5ae',
      '#b8c09d',
      '#a3aa8b',
      '#8f957a',
      '#7a8068',
      '#666b57',
      '#525546',
      '#3d4034',
      '#292b23',
      '#141511',
    ],
  },
  primaryColor: 'wlw-green',
  primaryShade: 1,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='light' >
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
)
