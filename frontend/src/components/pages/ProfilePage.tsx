import { Container, Grid, SimpleGrid, Tabs } from '@mantine/core'
import React from 'react'

const ProfilePage = () => {
  return (
    // <Container fluid mx={"5%"} style={{ height: '100%', display: 'flex', flexDirection: 'column' }} ></Container>
    <Container fluid >
        <Tabs color="teal" defaultValue="profile">
            <Tabs.List>
                <Tabs.Tab value="profile">Profile</Tabs.Tab>
                <Tabs.Tab value="medication">Medication</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="first" pt="xs">
            <SimpleGrid cols={3}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
            </SimpleGrid>
                {/* <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
                    <Grid.Col span={4}>1</Grid.Col>
                    <Grid.Col span={4}>2</Grid.Col>
                    <Grid.Col span={4}>3</Grid.Col>
                </Grid> */}
            </Tabs.Panel>

            <Tabs.Panel value="medication" pt="xs">
                Second tab color is blue, it gets this value from props, props have the priority and will
                override context value
            </Tabs.Panel>
        </Tabs>
    </Container>
  )
}

export default ProfilePage