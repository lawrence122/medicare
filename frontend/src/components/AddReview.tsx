import { Modal, Group, Button, ScrollArea, Fieldset, NumberInput, TextInput, Space, SimpleGrid, Textarea, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
import { conditionsTestData, symptomsTestData } from '../utils/testData';
import CustomCombobox from './onboarding/CustomCombobox';
import { useLocation } from 'react-router-dom';

const AddReview = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const location = useLocation();
    const medication = location.state;

    const [dosage, setDosage] = useState<string | undefined>();
    const [frequency, setFrequency] = useState<string | undefined>();
    const [routeAdmin, setRouteAdmin] = useState<string | undefined>();
    const [duration, setDuration] = useState<string | undefined>();
    const [sideEffect, setSideEffect] = useState<string | undefined>();
    const [severity, setSeverity] = useState<string | undefined>();
    const [onset, setOnset] = useState<string | undefined>();
    const [lasted, setLasted] = useState<string | undefined>();
    const [impact, setImpact] = useState<string | undefined>();
    const [helpSought, setHelpSought] = useState<string | undefined>();
    const [improved, setImproved] = useState<string | undefined>();
    const [medStopped, setMedStopped] = useState<string | undefined>();


  return (
    <>
        <Modal opened={opened} onClose={close} title={`Add a review for ${medication.title}`} centered scrollAreaComponent={ScrollArea.Autosize} size={"xl"} >
            <Fieldset legend="Details">
                <SimpleGrid cols={{md: 2, base: 1}}>
                    <TextInput
                        label="Dosage" autoFocus required
                        value={dosage}
                        onChange={setDosage}
                    />
                    {/* <CustomCombobox
                        label="Frequency of Use" withGroup={false} groups={new Map<string, string[]>}
                        options={["Daily", "Weekly", "Bi-weekly", "Monthly", "Bi-monthly"]}
                    /> */}
                    <TextInput
                        label="Frequency of Use" required
                        value={frequency}
                        onChange={setFrequency}
                    />
                </SimpleGrid>
                <SimpleGrid cols={{md: 2, base: 1}}>
                    <TextInput
                        label="Route of Administration" required
                        mt="md" value={routeAdmin}
                        onChange={setRouteAdmin}
                    />
                    {/* <CustomCombobox
                        label="Route of Administration" withGroup={false} groups={new Map<string, string[]>}
                        options={["Orally", "Topically", "Intravenous", "Shot", "Inhaled", "Drops or spray", "Suppository", "Implanted"]}
                    /> */}
                    <NumberInput
                        label="Duration of Use" required
                        mt="md" min={1} 
                        value={duration}
                        onChange={setDuration}
                    />
                </SimpleGrid>
            </Fieldset>

            <Space h={20} />

            <Fieldset legend="Side Effect Description">
                <SimpleGrid cols={{md: 2, base: 1}}>
                    {/* <CustomCombobox label='Symptoms Experienced' withGroup={true} groups={symptomsTestData} options={[]} /> */}
                    <TextInput
                        label="Symptoms Experienced" required
                        value={sideEffect}
                        onChange={setSideEffect}
                    />
                    {/* <CustomCombobox
                        label="Severity" withGroup={false} groups={new Map<string, string[]>}
                        options={["Mild (1)", "Moderate (2)", "Severe (3)", "Life-Threatening (4)"]}
                    /> */}
                    <TextInput
                        label="Severity" required
                        value={severity}
                        onChange={setSeverity}
                    />
                </SimpleGrid>
                <SimpleGrid cols={{md: 2, base: 1}}>
                    <TextInput
                        label="Time of Onset" required
                        mt="md" value={onset}
                        onChange={setOnset}
                    />
                    <NumberInput
                        label="How long symptoms lasted" required
                        mt="md" min={1} 
                        value={lasted}
                        onChange={setLasted}
                    />
                </SimpleGrid>
                <Textarea
                    label="Impact on daily life" required
                    mt="md" value={impact}
                    onChange={setImpact}
                />
            </Fieldset>

            <Space h={20} />

            <Fieldset legend="Outcome & Actions Taken">
                <SimpleGrid cols={{md: 2, base: 1}}>
                    {/* <CustomCombobox
                        label="Medical attention sought?" withGroup={false} groups={new Map<string, string[]>}
                        options={["Yes", "No"]}
                    /> */}
                    <TextInput
                        label="Medical attention sought?" required
                        value={helpSought}
                        onChange={setHelpSought}
                    />
                    {/* <CustomCombobox
                        label="Did the side effect improve or worsen?" withGroup={false} groups={new Map<string, string[]>}
                        options={["Improved", "Worsen", "No changes"]}
                    /> */}
                    <TextInput
                        label="Did the side effect improve or worsen?" required
                        value={improved}
                        onChange={setImproved}
                    />
                </SimpleGrid>
                {/* <CustomCombobox
                    label="Was the medication stopped or adjusted?" withGroup={false} groups={new Map<string, string[]>}
                    options={["Stopped", "Adjusted"]}
                /> */}
                <TextInput
                    label="Was the medication stopped or adjusted" required
                    mt="md" value={medStopped}
                    onChange={setMedStopped}
                />
            </Fieldset>
            
            <Group mt="lg" justify="flex-end">
                <Button onClick={close} variant="default">
                    Cancel
                </Button>
                <Button onClick={() => { console.log("Saved the review"); close() }} color="#5E8C61">
                    Add review
                </Button>
            </Group>
        </Modal>

        <Button color='#6C698D' onClick={open}>
            New Review
        </Button>
    </>
  )
}

export default AddReview