import { Modal, Group, Button, ScrollArea, Fieldset, NumberInput, TextInput, Space, SimpleGrid, Textarea, LoadingOverlay } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { symptomsTestData } from '../utils/testData';
import CustomCombobox from './onboarding/CustomCombobox';
import { IconPlus } from '@tabler/icons-react';
import { MedicationItem } from '../interfaces/MedicationItem';
import { useForm } from '@mantine/form';
import { useGlobal } from '../utils/GlobalContext';

const AddReview = (medication: MedicationItem) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [loading, { open: startLoading, close: stopLoading }] = useDisclosure(false);

    const { reviews, addReview, } = useGlobal();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            id: reviews.length + 1,
            username: sessionStorage.getItem('username'),
            createdOn: new Date(),
            dosage: '',
            frequency: '',
            routeAdmin: [],
            duration: undefined as number | undefined,
            sideEffect: [],
            severity: '',
            onset: '',
            lasted: undefined as number | undefined,
            impact: '',
            helpSought: '',
            improved: '',
            medStopped: ''
        },
    });

    const asyncSubmit = (values: any) =>
        new Promise((resolve) => setTimeout(() => resolve(values), 1000));

    const submit = async (values: typeof form.values) => {
        // TODO
        startLoading();
        try {
            await asyncSubmit(values);
            console.log(values);
            addReview(values)
            form.reset();
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            stopLoading();
            close();
        }
    }

    return (
        <>
            <Modal opened={opened} onClose={close} title={`Add a review for ${medication.title}`} centered scrollAreaComponent={ScrollArea.Autosize} size={"xl"} >
                <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
                <form onSubmit={form.onSubmit(submit)}>
                    <Fieldset legend="Details">
                        <SimpleGrid cols={{ md: 2, base: 1 }}>
                            <CustomCombobox
                                label="Frequency of Use"
                                withGroup={false}
                                groups={[]} required={true}
                                multiSelect={false}
                                options={[
                                    'Once daily',
                                    'Twice daily',
                                    'Three times daily',
                                    'Every 6 hours',
                                    'As needed',
                                    'Weekly'
                                ]}
                                {...form.getInputProps('frequency')}
                            />
                            <CustomCombobox
                                label="Route of Administration"
                                withGroup={false}
                                groups={[]} required={true}
                                multiSelect={true}
                                options={["Orally", "Topically", "Intravenous", "Shot", "Inhaled", "Drops or spray", "Suppository", "Implanted"]}
                                {...form.getInputProps('routeAdmin')}
                            />
                        </SimpleGrid>
                        <SimpleGrid cols={{ md: 2, base: 1 }}>
                            <TextInput
                                label="Dosage"
                                required
                                mt="md"
                                {...form.getInputProps('dosage')}
                            />
                            <NumberInput
                                label="Duration of Use"
                                required
                                mt="md"
                                min={1}
                                {...form.getInputProps('duration')}
                            />
                        </SimpleGrid>
                    </Fieldset>

                    <Space h={20} />

                    <Fieldset legend="Side Effect Description">
                        <SimpleGrid cols={{ md: 2, base: 1 }}>
                            <CustomCombobox
                                label='Symptoms Experienced'
                                withGroup={true}
                                groups={symptomsTestData}
                                options={[]} required={true}
                                multiSelect={true}
                                {...form.getInputProps('sideEffect')}
                            />
                            <CustomCombobox
                                label="Severity"
                                withGroup={false}
                                groups={[]} required={true}
                                multiSelect={false}
                                options={["Mild (Grade 1)", "Moderate (Grade 2)", "Severe (Grade 3)", "Life-Threatening (Grade 4)"]}
                                {...form.getInputProps('severity')}
                            />
                        </SimpleGrid>
                        <SimpleGrid cols={{ md: 2, base: 1 }}>
                            <TextInput
                                label="Time of Onset"
                                required
                                mt="md"
                                {...form.getInputProps('onset')}
                            />
                            <NumberInput
                                label="How long symptoms lasted"
                                required
                                mt="md"
                                min={1}
                                {...form.getInputProps('lasted')}
                            />
                        </SimpleGrid>
                        <Textarea
                            label="Impact on daily life"
                            required
                            mt="md"
                            {...form.getInputProps('impact')}
                        />
                    </Fieldset>

                    <Space h={20} />

                    <Fieldset legend="Outcome & Actions Taken">
                        <SimpleGrid cols={{ md: 2, base: 1 }}>
                            <CustomCombobox
                                label="Medical attention sought?"
                                withGroup={false}
                                groups={[]} required={true}
                                options={["Yes", "No"]}
                                multiSelect={false}
                                {...form.getInputProps('helpSought')}
                            />
                            <CustomCombobox
                                label="Did the side effect improve or worsen?"
                                withGroup={false}
                                groups={[]} required={true}
                                options={["Improved", "No changes", "Worsen"]}
                                multiSelect={false}
                                {...form.getInputProps('improved')}
                            />
                        </SimpleGrid>
                        <CustomCombobox
                            label="Was the medication stopped or adjusted?"
                            withGroup={false}
                            groups={[]} required={true}
                            options={["Stopped", "Adjusted"]}
                            multiSelect={false}
                            {...form.getInputProps('medStopped')}
                        />
                    </Fieldset>

                    <Group mt="lg" justify="flex-end">
                        <Button onClick={close} variant="default">Cancel</Button>
                        <Button type="submit" color="#5E8C61">Add</Button>
                    </Group>
                </form>
            </Modal>
            <Button color='#6C698D' onClick={open} leftSection={<IconPlus stroke={2} />}>Add Review</Button>
        </>
    )
}

export default AddReview