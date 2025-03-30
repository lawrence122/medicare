import React, { useState } from 'react';
// import classes from '../routes/Layout.module.css';
import {
  Drawer,
  Button,
  Tabs,
  Container,
} from '@mantine/core';
// import axiosClient from '../axiosClient';
import { useDisclosure } from '@mantine/hooks';
import RegisterForm from './login-register/RegisterForm';
import LoginForm from './login-register/LoginForm';

const LoginRegisterDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [activeTab, setActiveTab] = useState<string | null>('login');

  const [submitError, setSubmitError] = useState<string | null>(null);
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const resetErrors = (tab: string | null) => {
    setActiveTab(tab);
    if (tab) {
        setSubmitError(null)
        setRegisterError(null)
        setEmailError(null)
    }
  };

  return (
    <Container>
      <Button ml="auto" onClick={open}>Login/Register</Button>

      <Drawer opened={opened} onClose={close} position='right' size={"md"} >
        <Tabs value={activeTab} onChange={resetErrors}>
            <Tabs.List>
            <Tabs.Tab value="login">Login</Tabs.Tab>
            <Tabs.Tab value="register">Register</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="login">
              <LoginForm />
            </Tabs.Panel>

            <Tabs.Panel value="register">
              <RegisterForm />
            </Tabs.Panel>
        </Tabs>
        </Drawer>
    </Container>
  );
};

export default LoginRegisterDrawer;