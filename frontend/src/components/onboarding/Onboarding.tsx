import { Button, Container, Fieldset, Grid, Group, NumberInput, Text, Space, Stack, Stepper, Switch, TextInput, Paper, } from "@mantine/core"
import { IconCheck, IconScaleOutline, IconX } from "@tabler/icons-react";
import { useNavigate, } from "react-router-dom";
import CustomCombobox from "./CustomCombobox";
import { DateInput } from "@mantine/dates";
import { allergiesTestData, conditionsTestData } from "../../utils/testData";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const Onboarding = () => {
    const navigate = useNavigate();
    const [loading, { open: startLoading, close: stopLoading }] = useDisclosure(false);

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            name: '',
            dob: null as Date | null,
            age: undefined as number | undefined,
            weight: undefined as number | string | undefined,
            conditions: [],
            allergies: [],
            consent: false,
        },
        validate: {
            name: (value) => (!value ? 'Name is required' : null),
            dob: (value) => (!value ? 'Date of birth is required' : null),
            age: (value) => {
                if (!value) return 'Age is required';
                if (value < 0) return 'Age cannot be negative';
                if (value > 120) return 'Please enter a valid age';
                return null;
            },
            weight: (value) => {
                if (!value) return 'Weight is required';
                if (typeof value === 'string') {
                    const num = parseFloat(value);
                    if (isNaN(num)) return 'Please enter a valid number';
                    if (num <= 0) return 'Weight must be positive';
                }
                return null;
            },
            consent: (value) => (!value ? 'You must give consent to proceed' : null),
        },
    });

    const [isChecked, setIsChecked] = useState(form.values.consent);
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.currentTarget.checked;
        setIsChecked(checked);
        form.setFieldValue('consent', checked);
        form.clearFieldError('consent');
    };

    const asyncSubmit = (values: any) =>
        new Promise((resolve) => setTimeout(() => resolve(values), 1000));

    const getStarted = async (values: typeof form.values) => {
        console.log("get started")
        startLoading();
        try {
            await asyncSubmit(values);
            // TODO: SAVE THE DATA
            console.log("Form submitted:", values);
            form.reset();
            navigate("home");
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            stopLoading();
        }
    }

    return (
        <Container mx={75} fluid >
            <Paper radius="lg" shadow="sm" p={50} bg="white" mih={800}>
                <form onSubmit={form.onSubmit(getStarted)} >
                    <Space h={25} />
                    <Stepper active={1} w={700} >
                        <Stepper.Step label="First step" description="Create an account" disabled />
                        <Stepper.Step label="Second step" description="Onboarding" loading />
                    </Stepper>
                    
                    <Space h={50} />
                    
                    <Grid>
                        <Grid.Col span={{ md: 12, lg: 6 }} >
                            <Fieldset legend="Personal Information">
                                <TextInput
                                    label="Your name" autoFocus required
                                    placeholder="John Doe"
                                    {...form.getInputProps('name')}
                                />
                                <DateInput
                                    mt="md" required clearable
                                    label="Date of Birth"
                                    maxDate={new Date()}
                                    {...form.getInputProps('dob')}
                                />
                                <NumberInput
                                    label="Weight" mt="md" required
                                    {...form.getInputProps('weight')}
                                    rightSection={<IconScaleOutline stroke={2} />}
                                    rightSectionPointerEvents="none"
                                    rightSectionWidth={40}
                                />
                            </Fieldset>
                        </Grid.Col>
                        
                        <Grid.Col span={{ md: 12, lg: 6 }} >
                            <Fieldset legend="Medical History">
                                <CustomCombobox
                                    label="Existing Conditions"
                                    withGroup={false}
                                    groups={[]}
                                    options={conditionsTestData}
                                    multiSelect={true}
                                    {...form.getInputProps('conditions')}
                                />
                                
                                <Space h={25} />

                                <CustomCombobox
                                    label="Allergies"
                                    withGroup={false}
                                    groups={[]}
                                    options={allergiesTestData}
                                    multiSelect={true}
                                    {...form.getInputProps('allergies')}
                                />
                            </Fieldset>
                        </Grid.Col>
                    </Grid>
                    
                    <Space h={25} />
                    
                    <Group justify="space-between" >
                        <Stack gap="xs">
                            <Switch
                                size="md"
                                labelPosition="left"
                                label={
                                    <>
                                        I consent for my information to be used to refine the medical statistics.
                                        <span style={{ color: 'var(--mantine-color-red-6)' }}> *</span>
                                    </>
                                }
                                checked={isChecked}
                                onChange={handleSwitchChange}
                                thumbIcon={
                                    isChecked ? (
                                        <IconCheck size={12} color="#5E8C61" stroke={3} />
                                    ) : (
                                        <IconX size={12} color="#D33F49" stroke={3} />
                                    )
                                }
                            />
                            {form.errors.consent && ( <Text c="red" size="sm" mt={-2} ml={5}> {form.errors.consent} </Text> )}
                        </Stack>
                        
                        <Button type="submit" >Get started</Button>
                    </Group>
                </form>
            </Paper>
        </Container>
    )
}

export default Onboarding