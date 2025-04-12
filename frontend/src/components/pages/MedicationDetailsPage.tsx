import { Container, Paper, Title, Text, Group, Badge, Stack, Grid, Card } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { Medication } from '../../data/medications';

const MedicationDetailsPage = () => {
  const location = useLocation();
  const medication = location.state as Medication;

  if (!medication) {
    return (
      <Container>
        <Text>Medication not found</Text>
      </Container>
    );
  }

  return (
    <Container size="lg" py="xl">
      <Paper shadow="sm" p="xl" radius="md">
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <img
                  src={medication.imageUrl}
                  alt={medication.name}
                  style={{ width: '100%', height: 'auto' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/400x400?text=No+Image';
                  }}
                />
              </Card.Section>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 8 }}>
            <Stack gap="md">
              <Group justify="space-between">
                <Title order={2}>{medication.name}</Title>
                <Badge size="lg">{medication.category}</Badge>
              </Group>

              <Text size="lg" c="dimmed">{medication.genericName}</Text>
              <Text>{medication.description}</Text>

              <Group gap="xs">
                <Badge color="blue">Effectiveness: {medication.effectiveness}%</Badge>
                <Badge color="green">Rating: {medication.averageRating}/5</Badge>
              </Group>

              <Stack gap="xs">
                <Title order={4}>Dosage</Title>
                <Text>{medication.dosage}</Text>
              </Stack>

              <Stack gap="xs">
                <Title order={4}>Symptoms Treated</Title>
                <Group gap="xs">
                  {medication.symptoms.map((symptom, index) => (
                    <Badge key={index} variant="light">{symptom}</Badge>
                  ))}
                </Group>
              </Stack>

              <Stack gap="xs">
                <Title order={4}>Side Effects</Title>
                <Group gap="xs">
                  {medication.sideEffects.map((effect, index) => (
                    <Badge key={index} color="red" variant="light">{effect}</Badge>
                  ))}
                </Group>
              </Stack>

              <Stack gap="xs">
                <Title order={4}>Interactions</Title>
                <Group gap="xs">
                  {medication.interactions.map((interaction, index) => (
                    <Badge key={index} color="yellow" variant="light">{interaction}</Badge>
                  ))}
                </Group>
              </Stack>

              <Stack gap="xs">
                <Title order={4}>Pricing</Title>
                <Group gap="xs">
                  <Badge size="lg" color="teal">Generic: ${medication.price.generic}</Badge>
                  <Badge size="lg" color="blue">Brand: ${medication.price.brand}</Badge>
                </Group>
              </Stack>
            </Stack>
          </Grid.Col>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MedicationDetailsPage; 