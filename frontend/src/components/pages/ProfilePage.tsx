import { Avatar, Button, Center, Container, Divider, Fieldset, Flex, Grid, Group, Image, SimpleGrid, Tabs, Text, TextInput } from '@mantine/core'
import { DatePicker } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import React, { useState } from 'react'
import DeleteAccount from '../userProfile/DeleteAccount';

const ProfilePage = () => {
    const [opened, { toggle }] = useDisclosure();
    // const [dob, setDOB] = useState<Date | null>(null);
    
  return (
    // <Container fluid mx={"5%"} style={{ height: '100%', display: 'flex', flexDirection: 'column' }} ></Container>
    <Container fluid >
        <Tabs color="teal" defaultValue="profile" >
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
                            <TextInput label="Name" placeholder="John Doe" />
                            <TextInput label="Email" placeholder="smt@smt.com" mt="md" />
                            <TextInput label="Username" placeholder="Username" mt="md" />
                            <TextInput label="Patient ID" placeholder="XXXX-XXXX-XXXX" mt="md" />
                        </Fieldset>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }} >
                        <Fieldset legend="Personal information">
                            <TextInput label="Your name" placeholder="Your name" />
                            <TextInput label="Email" placeholder="Email" mt="md" />
                            <TextInput label="Email" placeholder="Email" mt="md" />
                        </Fieldset>
                    </Grid.Col>
                </Grid>
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