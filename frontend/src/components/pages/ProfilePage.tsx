import { Avatar, Button, Card, Center, Container, Divider, Fieldset, Grid, Group, NumberInput, Paper, Select, SimpleGrid, Slider, Space, Switch, Tabs, Text, TextInput, MultiSelect, Stack, Title, Badge, Rating, Modal, Textarea, ComboboxItem } from '@mantine/core'
import DeleteAccount from '../userProfile/DeleteAccount';
import { conditionsTestData, allergiesTestData } from '../../utils/testData';
import CustomCombobox from '../onboarding/CustomCombobox';
import { IconEdit, IconScaleOutline, IconTrash, IconHeart, IconHeartFilled, IconChartLine } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { DateInput } from '@mantine/dates';
import { calculateAge } from '../../utils/AgeCalculator';
import { UserProfile } from '../../interfaces/UserProfile';
import { medications } from '../../data/medications';
import { MedicationItem } from '../../interfaces/MedicationItem';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState<string | null>('profile');
    const [isEditing, setIsEditing] = useState(false);
    const [symptomModalOpen, setSymptomModalOpen] = useState(false);
    const [selectedMedication, setSelectedMedication] = useState<string | null>(null);
    const [symptomDate, setSymptomDate] = useState<Date | null>(null);
    const [symptomSeverity, setSymptomSeverity] = useState<number>(1);
    const [symptomNotes, setSymptomNotes] = useState('');

    const [profile, setProfile] = useState<UserProfile>({
        email: 'johndoe@gmail.com',
        displayName: 'John Doe',
        dateOfBirth: '',
        gender: 'male',
        weight: 70,
        height: 175,
        allergies: [],
        conditions: [],
        favoriteMedications: []
    });

    const handleSaveProfile = () => {
        setIsEditing(false);
        // TODO: Save to backend
    };

    const toggleFavoriteMedication = (medicationId: string) => {
        setProfile((prev: UserProfile) => {
            const isFavorited = prev.favoriteMedications.some((m: { medicationId: string }) => m.medicationId === medicationId);
            if (isFavorited) {
                return {
                    ...prev,
                    favoriteMedications: prev.favoriteMedications.filter((m: { medicationId: string }) => m.medicationId !== medicationId)
                };
            } else {
                return {
                    ...prev,
                    favoriteMedications: [...prev.favoriteMedications, { medicationId, symptoms: [] }]
                };
            }
        });
    };

    const addSymptomTrack = () => {
        if (!selectedMedication || !symptomDate) return;

        setProfile((prev: UserProfile) => ({
            ...prev,
            favoriteMedications: prev.favoriteMedications.map((med: { medicationId: string; symptoms: any[] }) => {
                if (med.medicationId === selectedMedication) {
                    return {
                        ...med,
                        symptoms: [...med.symptoms, {
                            date: symptomDate.toISOString(),
                            severity: symptomSeverity,
                            notes: symptomNotes
                        }]
                    };
                }
                return med;
            })
        }));

        setSymptomModalOpen(false);
        setSymptomDate(null);
        setSymptomSeverity(1);
        setSymptomNotes('');
    };

    const handleGenderChange = (value: string | null) => {
        if (value === 'male' || value === 'female' || value === 'other') {
            setProfile((prev: UserProfile) => ({
                ...prev,
                gender: value
            }));
        }
    };

    const handleWeightChange = (value: string | number) => {
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        setProfile((prev: UserProfile) => ({
            ...prev,
            weight: !isNaN(numValue) ? numValue : undefined
        }));
    };

    const handleHeightChange = (value: string | number) => {
        const numValue = typeof value === 'string' ? parseFloat(value) : value;
        setProfile((prev: UserProfile) => ({
            ...prev,
            height: !isNaN(numValue) ? numValue : undefined
        }));
    };

    return (
        <Container size="xl" py="xl">
            <Paper shadow="sm" radius="lg" p="xl">
                <Tabs value={activeTab} onChange={setActiveTab}>
                    <Tabs.List>
                        <Tabs.Tab value="profile">Profile</Tabs.Tab>
                        <Tabs.Tab value="medications">Favorite Medications</Tabs.Tab>
                    </Tabs.List>

                    <Tabs.Panel value="profile" pt="xl">
                        <Stack>
                            {!isEditing ? (
                                <>
                                    <Title order={3}>{profile.displayName}</Title>
                                    <Text><strong>Email:</strong> {profile.email}</Text>
                                    <Text><strong>Date of Birth:</strong> {profile.dateOfBirth || 'Not set'}</Text>
                                    <Text><strong>Gender:</strong> {profile.gender || 'Not set'}</Text>
                                    <Text><strong>Weight:</strong> {profile.weight ? `${profile.weight} kg` : 'Not set'}</Text>
                                    <Text><strong>Height:</strong> {profile.height ? `${profile.height} cm` : 'Not set'}</Text>
                                    <Text><strong>Allergies:</strong> {profile.allergies?.join(', ') || 'None'}</Text>
                                    <Text><strong>Medical Conditions:</strong> {profile.conditions?.join(', ') || 'None'}</Text>
                                    <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
                                </>
                            ) : (
                                <Stack>
                                    <TextInput
                                        label="Display Name"
                                        value={profile.displayName}
                                        onChange={(e) => setProfile(prev => ({ ...prev, displayName: e.target.value }))}
                                    />
                                    <DateInput
                                        label="Date of Birth"
                                        value={profile.dateOfBirth ? new Date(profile.dateOfBirth) : null}
                                        onChange={(date) => setProfile(prev => ({ ...prev, dateOfBirth: date?.toISOString() }))}
                                    />
                                    <Select
                                        label="Gender"
                                        value={profile.gender}
                                        onChange={handleGenderChange}
                                        data={[
                                            { value: 'male', label: 'Male' },
                                            { value: 'female', label: 'Female' },
                                            { value: 'other', label: 'Other' }
                                        ]}
                                    />
                                    <NumberInput
                                        label="Weight (kg)"
                                        value={profile.weight}
                                        onChange={handleWeightChange}
                                        min={0}
                                        max={300}
                                    />
                                    <NumberInput
                                        label="Height (cm)"
                                        value={profile.height}
                                        onChange={handleHeightChange}
                                        min={0}
                                        max={300}
                                    />
                                    <MultiSelect
                                        label="Allergies"
                                        value={profile.allergies || []}
                                        onChange={(value: string[]) => setProfile(prev => ({ ...prev, allergies: value }))}
                                        data={allergiesTestData}
                                        searchable
                                    />
                                    <MultiSelect
                                        label="Medical Conditions"
                                        value={profile.conditions || []}
                                        onChange={(value: string[]) => setProfile(prev => ({ ...prev, conditions: value }))}
                                        data={conditionsTestData}
                                        searchable
                                    />
                                    <Group>
                                        <Button onClick={handleSaveProfile}>Save</Button>
                                        <Button variant="light" onClick={() => setIsEditing(false)}>Cancel</Button>
                                    </Group>
                                </Stack>
                            )}
                        </Stack>
                    </Tabs.Panel>

                    <Tabs.Panel value="medications" pt="xl">
                        <Grid>
                            {medications.map(medication => {
                                const isFavorited = profile.favoriteMedications.some(m => m.medicationId === medication.id);
                                const medicationSymptoms = profile.favoriteMedications.find(m => m.medicationId === medication.id)?.symptoms || [];

                                return (
                                    <Grid.Col key={medication.id} span={{ base: 12, sm: 6, lg: 4 }}>
                                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                                            <Card.Section withBorder inheritPadding py="xs">
                                                <Group justify="space-between">
                                                    <Text fw={500}>{medication.name}</Text>
                                                    <Button
                                                        variant="subtle"
                                                        color={isFavorited ? 'red' : 'gray'}
                                                        onClick={() => toggleFavoriteMedication(medication.id)}
                                                        leftSection={isFavorited ? <IconHeartFilled size={16} /> : <IconHeart size={16} />}
                                                    >
                                                        {isFavorited ? 'Remove' : 'Add to Favorites'}
                                                    </Button>
                                                </Group>
                                            </Card.Section>

                                            {isFavorited && (
                                                <>
                                                    <Stack mt="md">
                                                        <Group justify="space-between">
                                                            <Text size="sm" fw={500}>Symptom Tracking</Text>
                                                            <Button
                                                                variant="light"
                                                                size="xs"
                                                                onClick={() => {
                                                                    setSelectedMedication(medication.id);
                                                                    setSymptomModalOpen(true);
                                                                }}
                                                                leftSection={<IconChartLine size={16} />}
                                                            >
                                                                Add Entry
                                                            </Button>
                                                        </Group>

                                                        {medicationSymptoms.length > 0 ? (
                                                            <Stack gap="xs">
                                                                {medicationSymptoms.map((symptom, index) => (
                                                                    <Card key={index} withBorder padding="xs">
                                                                        <Text size="sm">{new Date(symptom.date).toLocaleDateString()}</Text>
                                                                        <Group>
                                                                            <Text size="sm">Severity:</Text>
                                                                            <Rating value={symptom.severity} readOnly />
                                                                        </Group>
                                                                        <Text size="sm" c="dimmed">{symptom.notes}</Text>
                                                                    </Card>
                                                                ))}
                                                            </Stack>
                                                        ) : (
                                                            <Text size="sm" c="dimmed">No symptom entries yet</Text>
                                                        )}
                                                    </Stack>
                                                </>
                                            )}
                                        </Card>
                                    </Grid.Col>
                                );
                            })}
                        </Grid>
                    </Tabs.Panel>
                </Tabs>
            </Paper>

            <Modal
                opened={symptomModalOpen}
                onClose={() => setSymptomModalOpen(false)}
                title="Add Symptom Entry"
            >
                <Stack>
                    <DateInput
                        label="Date"
                        value={symptomDate}
                        onChange={setSymptomDate}
                        maxDate={new Date()}
                    />
                    <Text size="sm">Severity</Text>
                    <Rating size="lg" value={symptomSeverity} onChange={setSymptomSeverity} />
                    <Textarea
                        label="Notes"
                        value={symptomNotes}
                        onChange={(e) => setSymptomNotes(e.currentTarget.value)}
                        placeholder="Enter any additional notes about your symptoms..."
                    />
                    <Button onClick={addSymptomTrack}>Save Entry</Button>
                </Stack>
            </Modal>
        </Container>
    );
}

export default ProfilePage