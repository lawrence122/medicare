import './App.css'
import '@mantine/core/styles.css';
import { AppShell, Burger, Button, Grid, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginRegisterDrawer from './components/LoginRegisterDrawer';
import UserDropdown from './components/userProfile/UserDropdown';
import { useLogout } from './components/login-register/useLogout';

function App() {
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure();
  const { logout } = useLogout();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
      padding="md" bg="#F0F0F0"
    >
      <AppShell.Header >
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            {/* TODO: APP LOGO */}
            <Grid mx={75} visibleFrom="sm" w="100%" style={{ display: 'flex', justifyContent: 'space-between' }}  >
              <Grid.Col span={9} >
                <Group gap="sm">
                  <Button onClick={() => { navigate("home") }} >Home</Button>
                  <Button onClick={() => { navigate("about-us") }} >About Us</Button>
                  <Button onClick={() => { navigate("contact-us") }} >Contacts</Button>
                </Group>
              </Grid.Col>
              <Grid.Col span={3} style={{ display: 'flex', justifyContent: 'flex-end' }} >
                {sessionStorage.getItem("isLogged") === "true"
                ? ( <UserDropdown /> ) : (<LoginRegisterDrawer />)}
              </Grid.Col>
            </Grid>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        <Button onClick={() => { toggle(); navigate("home") }} >Home</Button>
        <Button onClick={() => { toggle(); navigate("about-us") }} >About Us</Button>
        <Button onClick={() => { toggle(); navigate("contact-us") }} >Contacts</Button>
        <Button>Support</Button>
        {sessionStorage.getItem("isLogged") === "true"
          && ( <>
                <Button onClick={() => { toggle(); navigate("profile") }} >Profile</Button>
                <Button onClick={() => { toggle(); logout() }} >Logout</Button>
          </>)}
        {/* TODO: SEARCH BAR HERE? */}
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer>
        <a href="https://www.nhs.uk" target="_blank" >
          <Image
            src="https://assets.nhs.uk/nhsuk-cms/images/nhs-attribution.width-510.png" 
            alt="Content supplied by the NHS website"
            height="41" my={15} fit='contain'
          />
        </a>
      </AppShell.Footer>
    </AppShell>
  )
}

export default App
