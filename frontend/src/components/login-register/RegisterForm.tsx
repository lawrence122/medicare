import { Box, TextInput, PasswordInput, Button, Container, Alert, Text } from '@mantine/core'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { handleEmailValidator } from '../../utils/EmailValidator'
import axios from 'axios';
import { IconLogin2 } from '@tabler/icons-react';

const RegisterForm = () => {
    const navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [registerError, setRegisterError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);


    const handleRegisterSubmit = async (e: React.FormEvent) => {
        setIsLoading(true)
        e.preventDefault();
        const error = handleEmailValidator(registerEmail)
        if (error) {
            setIsLoading(false);
            setEmailError(error);
            return;
        }

        if (registerPassword !== registerConfirmPassword) {
            setIsLoading(false);
            setPasswordError('Passwords do not match');
            return;
        }

        // TODO
        try {
        //     const response = await axiosClient.post('/register', { registerEmail, registerPassword })
        //     if(response.status === 201) {
                await new Promise(resolve => setTimeout(resolve, 500));
                console.log('Register submitted:', { email: registerEmail, password: registerPassword });
                sessionStorage.setItem("isLogged", "true");
                close();
                navigate("/onboarding");
        //     } else {
        //         setRegisterError(response.data.error);
        //     }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const response = error.response;
                if (response?.status === 409) {
                    const errorMessage = (response.data as { error?: string }).error;
                    setRegisterError(errorMessage ? errorMessage : null);
                }
            }
        } finally {
            setIsLoading(false)
        }
    };


  return (
    <Container fluid >
        {registerError && (
            <Alert color="red" variant='filled' my={15} >
                <Text color='red.9'>{registerError}</Text>
            </Alert>
        )}
        <form onSubmit={handleRegisterSubmit}>
            <Box mt="md">
                <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    value={registerEmail}
                    onChange={(e) => setRegisterEmail(e.currentTarget.value)}
                    error={emailError}
                    onBlur={(e) => setEmailError(handleEmailValidator(e.currentTarget.value))}
                />
            </Box>
            <Box mt="md">
                <PasswordInput
                    required
                    label="Password"
                    placeholder="Your password"
                    value={registerPassword}
                    error={passwordError}
                    onChange={(e) => setRegisterPassword(e.currentTarget.value)}
                />
            </Box>
            <Box mt="md">
                <PasswordInput
                    required
                    label="Confirm Password"
                    placeholder="Confirm your password"
                    value={registerConfirmPassword}
                    error={passwordError}
                    onChange={(e) => setRegisterConfirmPassword(e.currentTarget.value)}
                    // onBlur={handleRegisterPassword}
                />
            </Box>
            <Box mt="xl">
                <Button type="submit" fullWidth leftSection={<IconLogin2 stroke={2} />} loading={isLoading} >Register</Button>
            </Box>
        </form>
    </Container>
  )
}

export default RegisterForm