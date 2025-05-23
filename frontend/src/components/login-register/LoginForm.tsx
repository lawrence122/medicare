import { Box, TextInput, PasswordInput, Button, Container, Alert, Text } from '@mantine/core';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleEmailValidator } from '../../utils/EmailValidator';
import { IconLogin2 } from '@tabler/icons-react';

const LoginForm = () => {
    const navigate = useNavigate();
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoginSubmit = async (e: React.FormEvent) => {
        setIsLoading(true)
        e.preventDefault();
        const error = handleEmailValidator(loginEmail)
        if (error) {
            setIsLoading(false);
            setEmailError(error);
            
            return;
        }
    
        try {
            // TODO
            // await axiosClient.post('/login', { loginEmail, loginPassword })
            await new Promise(resolve => setTimeout(resolve, 500));
            sessionStorage.setItem("isLogged", "true");
            sessionStorage.setItem("username", loginEmail.split('@')[0]);
            close();
            navigate("/home")
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const response = error.response;
                if (response?.status === 401) {
                    const errorMessage = (response.data as { error?: string }).error;
                    setLoginError(errorMessage ? errorMessage : null);
                }
            }
        } finally {
            setIsLoading(false)
        }
      };
  return (
    <Container fluid >
        {loginError && (
            <Alert color="red" variant='filled' my={15} >
                <Text color='red.9'>{loginError}</Text>
            </Alert>
        )}
        
        <form onSubmit={handleLoginSubmit}>
            <Box mt="md" onError={loginError?.toString}>
                <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.currentTarget.value)}
                    error={emailError}
                    onBlur={(e) => setEmailError(handleEmailValidator(e.currentTarget.value))}
                />
            </Box>
            <Box mt="md">
                <PasswordInput
                    required
                    label="Password"
                    placeholder="Your password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.currentTarget.value)}
                />
            </Box>
            <Box mt="xl">
                <Button type="submit" fullWidth leftSection={<IconLogin2 stroke={2} />} loading={isLoading} >Login</Button>
            </Box>
        </form>
    </Container>
  )
}

export default LoginForm