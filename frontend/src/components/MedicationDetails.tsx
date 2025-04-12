import { Container, Title, Text, Group, Card, Image, Stack, Badge, Divider, Tabs, Grid } from '@mantine/core';
import { MedicationItem } from '../interfaces/MedicationItem';
import MedicationReviews from './MedicationReviews';

interface MedicationDetailsProps {
  medication: MedicationItem;
}

// Sample reviews data - in a real app, this would come from your backend
const sampleReviews = [
  {
    id: '1',
    userName: 'John Doe',
    rating: 4,
    comment: 'This medication worked well for my symptoms. The side effects were minimal.',
    date: '2024-03-15',
    helpfulCount: 12
  },
  {
    id: '2',
    userName: 'Jane Smith',
    rating: 5,
    comment: 'Very effective and fast-acting. Would recommend to others.',
    date: '2024-03-10',
    helpfulCount: 8
  },
  {
    id: '3',
    userName: 'Mike Johnson',
    rating: 3,
    comment: 'Helped with my condition but had some mild side effects.',
    date: '2024-03-05',
    helpfulCount: 5
  }
];

const MedicationDetails = ({ medication }: MedicationDetailsProps) => {
  return (
    <Container size="xl" py="xl">
      <Card shadow="sm" padding="lg" radius="lg">
        <Group align="flex-start" mb="md">
          {medication.imageUrl && (
            <Image
              src={medication.imageUrl}
              alt={medication.title || medication.name || 'Medication'}
              width={200}
              height={200}
              fit="contain"
            />
          )}
          <Stack>
            <Title order={2}>{medication.title || medication.name}</Title>
            {medication.genericName && (
              <Text size="lg" c="dimmed">
                Generic Name: {medication.genericName}
              </Text>
            )}
            {medication.manufacturer && (
              <Text size="sm">
                Manufacturer: {medication.manufacturer}
              </Text>
            )}
            {medication.category && (
              <Badge size="lg" variant="light">
                {medication.category}
              </Badge>
            )}
          </Stack>
        </Group>

        <Tabs defaultValue="details">
          <Tabs.List>
            <Tabs.Tab value="details">Details</Tabs.Tab>
            <Tabs.Tab value="reviews">Reviews</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="details" pt="md">
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack>
                  <Title order={3}>Description</Title>
                  <Text>{medication.description}</Text>

                  {medication.symptoms && medication.symptoms.length > 0 && (
                    <>
                      <Title order={3} mt="md">Symptoms Treated</Title>
                      <Group>
                        {medication.symptoms.map((symptom, index) => (
                          <Badge key={index} variant="outline">
                            {symptom}
                          </Badge>
                        ))}
                      </Group>
                    </>
                  )}

                  {medication.dosage && (
                    <>
                      <Title order={3} mt="md">Dosage</Title>
                      <Text>{medication.dosage}</Text>
                    </>
                  )}
                </Stack>
              </Grid.Col>

              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack>
                  {medication.sideEffects && medication.sideEffects.length > 0 && (
                    <>
                      <Title order={3}>Side Effects</Title>
                      <Group>
                        {medication.sideEffects.map((effect, index) => (
                          <Badge key={index} color="red" variant="light">
                            {effect}
                          </Badge>
                        ))}
                      </Group>
                    </>
                  )}

                  {medication.interactions && medication.interactions.length > 0 && (
                    <>
                      <Title order={3} mt="md">Drug Interactions</Title>
                      <Group>
                        {medication.interactions.map((interaction, index) => (
                          <Badge key={index} color="yellow" variant="light">
                            {interaction}
                          </Badge>
                        ))}
                      </Group>
                    </>
                  )}

                  {medication.effectiveness && (
                    <>
                      <Title order={3} mt="md">Effectiveness</Title>
                      <Text>{medication.effectiveness}</Text>
                    </>
                  )}

                  {medication.averageRating && (
                    <>
                      <Title order={3} mt="md">Average Rating</Title>
                      <Text>{medication.averageRating} / 5</Text>
                    </>
                  )}

                  {medication.price && (
                    <>
                      <Title order={3} mt="md">Price</Title>
                      <Stack>
                        <Text>Generic: ${medication.price.generic.toFixed(2)}</Text>
                        <Text>Brand: ${medication.price.brand.toFixed(2)}</Text>
                      </Stack>
                    </>
                  )}
                </Stack>
              </Grid.Col>
            </Grid>
          </Tabs.Panel>

          <Tabs.Panel value="reviews" pt="md">
            <MedicationReviews reviews={sampleReviews} />
          </Tabs.Panel>
        </Tabs>
      </Card>
    </Container>
  );
};

export default MedicationDetails;