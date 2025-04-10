import { Button, Container, Fieldset, Grid, Group, NumberInput, Space, Stepper, Switch, TextInput, useCombobox } from "@mantine/core"
import { IconCheck, IconScaleOutline, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useNavigate, } from "react-router-dom";
import CustomCombobox from "./CustomCombobox";
import { DateInput } from "@mantine/dates";
import { allergiesTestData, conditionsTestData } from "../../utils/testData";

const Onboarding = () => {
    const navigate = useNavigate();
    const [consent, setConsent] = useState(false);

    const [name, setName] = useState<string | undefined>();
    const [dob, setDOB] = useState<Date | null>(null);
    const [age, setAge] = useState<number | undefined>();
    const [weight, setWeight] = useState<number | undefined>();

    const calculateAge = (date: Date | null) => {
        if (date) {
            const today = new Date();
            const yearDiff = today.getFullYear() - date.getFullYear();
            const monthDiff = today.getMonth() - date.getMonth();
            const dayDiff = today.getDate() - date.getDate();

            setAge(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? yearDiff - 1 : yearDiff);
        }
        setDOB(date)
    }

    // const handleSubmit = async (values: typeof form.values) => {
    //     await asyncSubmit(values);
    //     setCompleted(true);
    //   };
    
    //   if (completed) {
    //     return (
    //       <Stack>
    //         <Text>Form submitted!</Text>
    //         <Button onClick={() => setCompleted(false)}>Reset to initial state</Button>
    //       </Stack>
    //     );
    // }

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });


    const getStarted = () => {
        // TODO: SAVE THE DATA
        navigate("home");
    }

    return (
        <Container mx={75} fluid >
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
                            placeholder="John Doe" value={name}
                            onChange={setName}
                        />
                        <DateInput
                            mt="md" required clearable
                            label="Date of Birth"
                            maxDate={new Date()}
                            value={dob}
                            onChange={calculateAge}
                        />
                        <NumberInput
                            label="Age" readOnly
                            mt="md" min={1} 
                            value={age}
                            // onValueChange={setAge}
                        />
                        <NumberInput
                            label="Weight" mt="md" required
                            value={weight} onChange={setWeight}
                            rightSection={<IconScaleOutline stroke={2} />}
                            rightSectionPointerEvents="none"
                            rightSectionWidth={40}
                        />
                        {/* <TextInput label="Health Card Number" placeholder="XXXX-XXXX-XXXX" mt="md" /> */}
                    </Fieldset>
                </Grid.Col>
                
                <Grid.Col span={{ md: 12, lg: 6 }} >
                    <Fieldset legend="Medical History">
                        <CustomCombobox label="Existing Conditions" withGroup={false} options={conditionsTestData} groups={[]} />
                        
                        <Space h={25} />

                        <CustomCombobox label="Allergies" withGroup={false} options={allergiesTestData} groups={[]} />
                    </Fieldset>
                </Grid.Col>
            </Grid>
            
            <Space h={25} />
            
            <Group justify="space-between" >
                <Switch
                    required size="md"
                    labelPosition="left"
                    checked={consent}
                    onChange={(event) => setConsent(event.currentTarget.checked)}
                    label="I consent for my information to be used to refine the medical statistics."
                    thumbIcon={
                        consent ? (
                          <IconCheck size={12} color="#5E8C61" stroke={3} />
                        ) : (
                          <IconX size={12} color="#D33F49" stroke={3} />
                        )
                      }
                />
                <Button onClick={getStarted} >Get started</Button>
            </Group>
        </Container>
    )
}

export default Onboarding