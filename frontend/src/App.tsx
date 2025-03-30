import React from 'react'
import './App.css'
import '@mantine/core/styles.css';
import { AppShell, Burger, Button, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginRegisterDrawer from './components/LoginRegisterDrawer';
import UserDropdown from './components/UserDropdown';

function App() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            {/* APP LOGO */}
            <Group ml="xl" gap={0} visibleFrom="sm">
              <Button onClick={() => { navigate("home") }} >Home</Button>
              <Button onClick={() => { navigate("about-us") }} >About Us</Button>
              <Button onClick={() => { navigate("contact-us") }} >Contacts</Button>
              <Button>Support</Button>
              <LoginRegisterDrawer />
              <UserDropdown />
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Button onClick={() => { navigate("home") }} >Home</Button>
        <Button onClick={() => { navigate("about-us") }} >About Us</Button>
        <Button onClick={() => { navigate("contact-us") }} >Contacts</Button>
        <Button>Support</Button>
        {/* <Button>Login/Register</Button> */}
        <Button onClick={() => { navigate("profile") }} >Profile</Button>
        {/* <LoginRegister />
        <UserDropdown /> */}
        {/* {sessionStorage.getItem("isLogged") === "false" ? ( <LoginRegister /> ) : 
          (<>
            <button className={classes.headerButton} onClick={() => navigate("/order")}>SHIPPING</button>
            <UserDropdown />
          </>)} */}
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
