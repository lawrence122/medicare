import { Avatar, Card, Container, Grid, Group, Image, SimpleGrid, Text } from '@mantine/core';
import React from 'react'
import { useLocation } from 'react-router-dom';

const MedicationDetails = () => {
    const location = useLocation();
    const medication = location.state;

    const reviews = [
        {
            id: 1,
            username: "Some Username",
            created: "4/2/2025, 2:00:48 PM",
            review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            username: "Another Username",
            created: "3/22/2025, 2:00:48 PM",
            review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 3,
            username: "Xncdkmck",
            created: "4/2/2024, 2:00:48 PM",
            review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ];

  return (
    <Container fluid >
        <Grid>
            <Grid.Col span={12} mt={15} mb={25} >
                <Text
                    size={"35px"}
                    fw={700}
                    ta={"center"}
                    td={"underline"}
                >
                    {medication.title}
                </Text>
            </Grid.Col>
            <Grid.Col span={12} >
                <Group align="center" >
                    <Image
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                        variant='transparent'
                        radius={75}
                        // w={"auto"}
                        h={150}
                    />
                    <Text>{medication.description}</Text>
                </Group>
            </Grid.Col>
            <Grid.Col span={12} >
                <SimpleGrid cols={1} >
                    <Text
                        size={"30px"}
                        fw={700}
                        td={"underline"}
                    >
                        Reviews
                    </Text>
                    {reviews?.map((review) => (
                        <Card
                            key={review.id}
                            shadow="sm" 
                            p="lg" mb="sm"
                        >
                            <Group mb={15} >
                                <Avatar
                                    size={50}
                                    key={review.username}
                                    name={review.username}
                                    color='initials' allowedInitialsColors={['thistle', 'ultra-violet', 'sea-green']}
                                />
                                <SimpleGrid cols={1} verticalSpacing="xs" >
                                    <Text
                                        fw={500}
                                    >
                                        {review.username}
                                    </Text>
                                    <Text
                                        size='sm'
                                        c="dimmed"
                                    >
                                        {new Date(review.created).toLocaleString()}
                                    </Text>
                                </SimpleGrid>
                            </Group>
                            <Text
                                ml={65}
                            >
                                {review.review}
                            </Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </Grid.Col>
        </Grid>
    </Container>
  )
}

export default MedicationDetails