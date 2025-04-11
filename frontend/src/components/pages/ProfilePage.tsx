import { Avatar, Button, Card, Center, Container, Divider, Fieldset, Grid, Group, NumberInput, Paper, Select, SimpleGrid, Slider, Space, Switch, Tabs, Text, TextInput } from '@mantine/core'
import DeleteAccount from '../userProfile/DeleteAccount';
import { conditionsTestData, allergiesTestData } from '../../utils/testData';
import CustomCombobox from '../onboarding/CustomCombobox';
import { IconEdit, IconScaleOutline, IconTrash } from '@tabler/icons-react';
import { useState } from 'react';
import { DateInput } from '@mantine/dates';
import { calculateAge } from '../../utils/AgeCalculator';

const ProfilePage = () => {
    const [editing, setEditing] = useState<boolean>(false);
    const [dob, setDOB] = useState<Date | null>(null);
    const [age, setAge] = useState<number | undefined>();
    const [weight, setWeight] = useState<number | string>();

    const [medToDelete, setMedToDelete] = useState<number | null>(null);

    const [language, setLanguage] = useState('en');
    const [fontSize, setFontSize] = useState(16);
    const [notifications, setNotifications] = useState(true);
    const [twoFactorAuth, setTwoFactorAuth] = useState(false);
    const [savedMeds, setSavedMeds] = useState([
        {
          id: 1,
          name: 'Ibuprofen',
          dosage: '200mg',
          frequency: 'Every 6 hours',
          description: 'Pain reliever and anti-inflammatory'
        },
        {
          id: 2,
          name: 'Amoxicillin',
          dosage: '500mg',
          frequency: 'Twice daily',
          description: 'Antibiotic for bacterial infections'
        },
    ]);
    
    const handleRemove = async (id: number) => {
        setMedToDelete(id);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSavedMeds(prev => prev.filter(med => med.id !== id));
        } catch (error) {
            console.error('Failed to remove medication');
        } finally {
            setMedToDelete(null);
        }
    };
    
  return (
    <Container fluid >
        <Paper radius="lg" shadow="sm" p={25} bg="white" mih={800}>
            <Tabs defaultValue="profile">
                <Tabs.List my={20} >
                    <Tabs.Tab value="profile">Your Profile</Tabs.Tab>
                    <Tabs.Tab value="medication">Your Saved Medications</Tabs.Tab>
                    <Tabs.Tab value="settings" ml={"auto"}>Settings</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="profile" pt="xs">
                    <Grid grow gutter={25} >
                        <Grid.Col
                            span={{ base: 12, md: 3 }}
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "100%",
                            }}
                        >
                            <SimpleGrid cols={1} w={300} >
                                <Center>
                                    <Avatar 
                                        // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                                        variant='transparent'
                                        radius={200}
                                        w={"auto"}
                                        h={100}
                                        name={sessionStorage.getItem('username')}
                                        color='black'
                                    />
                                </Center>
                                <Center>
                                    <Text>Someone's name</Text>
                                </Center>
                                <Divider />
                                <Center>
                                    <Text>some info</Text>
                                </Center>
                                <Center>
                                    <Text>Joined on: {new Date('04/02/2022').toDateString()}</Text>
                                </Center>
                            </SimpleGrid>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4 }} >
                        <Fieldset legend="Personal information">
                                <TextInput
                                    label="Name"
                                    disabled={!editing}
                                    placeholder="John Doe"
                                />
                                <TextInput
                                    mt="md"
                                    disabled={!editing}
                                    label="Email"
                                    placeholder="smt@smt.com"
                                />
                                <DateInput
                                    mt="md" required clearable
                                    disabled={!editing}
                                    label="Date of Birth"
                                    maxDate={new Date()}
                                    value={dob}
                                    onChange={(date) => { setDOB(date); setAge(calculateAge(date)) }}
                                />
                                <NumberInput
                                    label="Weight" mt="md" required
                                    disabled={!editing}
                                    value={weight} onChange={setWeight}
                                    rightSection={<IconScaleOutline stroke={2} />}
                                    rightSectionPointerEvents="none"
                                    rightSectionWidth={40}
                                />
                            </Fieldset>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, sm: 4 }} >
                            <Fieldset legend="Medical History">
                                <CustomCombobox label="Existing Conditions" withGroup={false} options={conditionsTestData} groups={[]} multiSelect={true} readOnly={!editing} />
                                
                                <Space h={25} />

                                <CustomCombobox label="Allergies" withGroup={false} options={allergiesTestData} groups={[]} multiSelect={true} readOnly={!editing} />
                            </Fieldset>
                        </Grid.Col>
                    </Grid>
                    <Group justify='flex-end'>
                        {editing
                        ? <>
                            <Button variant='default' onClick={() => { setEditing(!editing) }} >
                                Cancel
                            </Button>
                            <Button
                                color="sea-green"
                                onClick={() => { setEditing(!editing) }}
                            >
                                Save
                            </Button>
                        </>
                        : <Button onClick={() => { setEditing(!editing) }} >
                            <IconEdit stroke={2} />
                            Edit
                        </Button>
                        }
                    </Group>
                </Tabs.Panel>

                <Tabs.Panel value="medication" pt="xs">
                    {savedMeds.length === 0 ? (
                        <Text fs="italic" color="dimmed">No medications saved yet</Text>
                    ) : (
                        <SimpleGrid
                            cols={{ base: 1, sm: 2, lg: 3 }}
                            spacing="md"
                            verticalSpacing="md"
                        >
                        {savedMeds.map(med => (
                            <Card key={med.id} shadow="sm" padding="lg" radius="md" withBorder>
                                <Group justify="space-between" mb="xs">
                                    <Text fw={500} size="lg">{med.name}</Text>
                                    <Button
                                        loading={medToDelete === med.id}
                                        variant="subtle"
                                        color="red"
                                        size="sm"
                                        onClick={() => handleRemove(med.id)}
                                        leftSection={<IconTrash size={16} />}
                                    >
                                    Remove
                                    </Button>
                                </Group>

                                <Text size="sm" c="dimmed">
                                    <strong>Dosage:</strong> {med.dosage}
                                </Text>
                                <Text size="sm" c="dimmed">
                                    <strong>Frequency:</strong> {med.frequency}
                                </Text>
                                <Text size="sm" mt="sm">
                                    {med.description}
                                </Text>
                            </Card>
                        ))}
                        </SimpleGrid>
                    )}
                </Tabs.Panel>

                <Tabs.Panel value="settings" pt="xs">
                    <SimpleGrid cols={1} w={500}>
                        <Switch
                            label="Enable Notifications"
                            labelPosition="left"
                            checked={notifications}
                            onChange={(e) => setNotifications(e.currentTarget.checked)}
                        />

                        <Space h={15} />

                        <div>
                            <Text size="sm" mb="xs">Font Size: {fontSize}px</Text>
                            <Slider 
                                value={fontSize} 
                                onChange={setFontSize}
                                min={12}
                                max={24}
                                marks={[
                                    { value: 12, label: '12px' },
                                    { value: 16, label: '16px' },
                                    { value: 20, label: '20px' },
                                    { value: 24, label: '24px' },
                                ]}
                            />
                        </div>

                        <Space h={15} />

                        <Switch
                            label="Two-Factor Authentication"
                            labelPosition="left"
                            checked={twoFactorAuth}
                            onChange={(e) => setTwoFactorAuth(e.currentTarget.checked)}
                        />

                        <Space h={15} />

                        <Select
                            label="Language"
                            value={language}
                            onChange={(value) => setLanguage(value || 'en')}
                            data={[
                            { value: 'en', label: 'English' },
                            { value: 'es', label: 'Spanish' },
                            { value: 'fr', label: 'French' },
                            ]}
                        />
                    </SimpleGrid>
                    <Group mt={15} justify='flex-end'>
                        <DeleteAccount />
                    </Group>
                </Tabs.Panel>
            </Tabs>
        </Paper>
    </Container>
  )
}

export default ProfilePage