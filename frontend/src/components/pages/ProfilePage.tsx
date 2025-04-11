import { Avatar, Button, Center, Container, Divider, Fieldset, Grid, Group, NumberInput, SimpleGrid, Space, Tabs, Text, TextInput } from '@mantine/core'
// import { useDisclosure } from '@mantine/hooks';
import DeleteAccount from '../userProfile/DeleteAccount';
import { conditionsTestData, allergiesTestData } from '../../utils/testData';
import CustomCombobox from '../onboarding/CustomCombobox';
import { IconEdit, IconScaleOutline } from '@tabler/icons-react';
import { useState } from 'react';
import { DateInput } from '@mantine/dates';
import { calculateAge } from '../../utils/AgeCalculator';

const ProfilePage = () => {
    // const [opened, { toggle }] = useDisclosure();
    const [editing, setEditing] = useState<boolean>(false);
    const [dob, setDOB] = useState<Date | null>(null);
    const [age, setAge] = useState<number | undefined>();
    const [weight, setWeight] = useState<number | string>();
    
  return (
    // <Container fluid mx={"5%"} style={{ height: '100%', display: 'flex', flexDirection: 'column' }} ></Container>
    <Container fluid >
        <Tabs defaultValue="profile" >
            <Tabs.List my={20} >
                <Tabs.Tab value="profile">Profile</Tabs.Tab>
                <Tabs.Tab value="medication">Medication</Tabs.Tab>
                <Tabs.Tab value="settings" ml={"auto"}>Settings</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="profile" pt="xs">
                <Grid>
                    <Grid.Col
                        span={{ base: 12, md: 4 }}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                        }}
                    >
                        <SimpleGrid cols={1} w={400} >
                            <Center>
                                <Avatar 
                                    // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                                    variant='transparent'
                                    radius={200}
                                    w={"auto"}
                                    h={100}
                                    // fit={"contain"}
                                    color='black'
                                />
                                {/* <Image
                                    radius="md"
                                    src={null}
                                    h={50}
                                    w={50}
                                    fallbackSrc="https://placehold.co/200x200?text=Placeholder"
                                /> */}
                            </Center>
                            <Center>
                                <Text>Someone's name</Text>
                            </Center>
                            <Divider />
                            <Center>
                                <Text>some info</Text>
                            </Center>
                            <Center>
                                <Text>some date</Text>
                            </Center>
                        </SimpleGrid>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 4 }} >
                       <Fieldset legend="Personal information">
                            <TextInput
                                label="Name"
                                readOnly={!editing}
                                placeholder="John Doe"
                            />
                            <TextInput
                                mt="md"
                                readOnly={!editing}
                                label="Email"
                                placeholder="smt@smt.com"
                            />
                            <DateInput
                                mt="md" required clearable
                                readOnly={!editing}
                                label="Date of Birth"
                                maxDate={new Date()}
                                value={dob}
                                onChange={(date) => { setDOB(date); setAge(calculateAge(date)) }}
                            />
                            <NumberInput
                                label="Weight" mt="md" required
                                readOnly={!editing}
                                value={weight} onChange={setWeight}
                                rightSection={<IconScaleOutline stroke={2} />}
                                rightSectionPointerEvents="none"
                                rightSectionWidth={40}
                            />
                        </Fieldset>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }} >
                        <Fieldset legend="Medical History">
                            <CustomCombobox label="Existing Conditions" withGroup={false} options={conditionsTestData} groups={[]} />
                            
                            <Space h={25} />

                            <CustomCombobox label="Allergies" withGroup={false} options={allergiesTestData} groups={[]} />
                        </Fieldset>
                    </Grid.Col>
                </Grid>
                <Group justify='flex-end'>
                    {editing
                    ? <>
                        <Button
                            variant='default'
                            onClick={() => { setEditing(!editing) }}
                        >
                            Cancel
                        </Button>
                        <Button
                            color="sea-green"
                            onClick={() => { setEditing(!editing) }}
                        >
                            Save
                        </Button>
                    </>
                    : <Button
                        // autoContrast
                        onClick={() => { setEditing(!editing) }}
                        >
                        <IconEdit stroke={2} />
                        Edit
                    </Button>
                    }
                </Group>
            </Tabs.Panel>

            <Tabs.Panel value="medication" pt="xs">
                Second tab color is blue, it gets this value from props, props have the priority and will
                override context value
            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="xs">
                <DeleteAccount />
            </Tabs.Panel>
        </Tabs>
    </Container>
  )
}

export default ProfilePage