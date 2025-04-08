import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/dates/styles.css';
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
import MedicationDetails from './components/MedicationDetails.tsx'

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
      {
        path: ":medication", //TODO
        element: <MedicationDetails />,
        // loader: ({ params }) => {
        //   (`Main: ${console.log(params)}`)
        //   // return fetchUserData(params.userId);
        // },
      },
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
    'thistle': [
      '#F4ECF6',
      '#F1E7F4',
      '#EEE1F1',
      '#EADAED',
      '#E5D1E9',
      '#DEC5E3', // default
      '#B29EB6',
      '#8E7E92',
      '#726575',
      '#5B515E',
      '#49414B'
    ],
    'ultra-violet': [
      '#CFCDDA',
      '#C3C1D1',
      '#B4B2C5',
      '#A19FB6',
      '#8987A4',
      '#6C698D', // default
      '#565471',
      '#45435A',
      '#373648',
      '#2C2B3A',
      '#23222E'
    ],
    'sea-green': [
      '#CAD9CB',
      '#BDD0BE',
      '#ADC4AE',
      '#98B59A',
      '#7EA381',
      '#5E8C61', // default
      '#4B704E',
      '#3C5A3E',
      '#304832',
      '#263A28',
      '#1E2E20'
    ],
    // Anti-flash white: F0F0F0
    // Night: F0F0F0
  },
  primaryColor: 'thistle',
  primaryShade: 6,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='light' >
      <RouterProvider router={router} />
    </MantineProvider>
  </StrictMode>,
)
