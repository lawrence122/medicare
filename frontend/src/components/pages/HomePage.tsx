import { useState } from 'react';
import { Container, Title, TextInput, Group, Card, Text, Button, Flex, Center } from '@mantine/core';
import { IconEye } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { medications } from '../../data/medications';
import { medications as testData } from '../../utils/testData';
import { MedicationItem } from '../../interfaces/MedicationItem';
import { SaveMedication } from '../SaveMedication';
import AddReview from '../AddReview';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Combine medications from both sources
  const allMedications: MedicationItem[] = [
    ...medications.map(med => ({
      id: med.id,
      title: med.name,
      name: med.name,
      genericName: med.genericName,
      description: med.description,
      category: med.category,
      symptoms: med.symptoms,
      dosage: med.dosage,
      sideEffects: med.sideEffects,
      interactions: med.interactions,
      manufacturer: med.manufacturer,
      imageUrl: med.imageUrl,
      effectiveness: med.effectiveness,
      averageRating: med.averageRating,
      price: med.price
    })),
    ...testData
  ];

  const filteredItems = allMedications.filter(item => {
    const searchLower = searchQuery.toLowerCase();
    return (
      (item.title?.toLowerCase().includes(searchLower) || 
       item.name?.toLowerCase().includes(searchLower)) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.category?.toLowerCase().includes(searchLower) ||
      item.symptoms?.some(symptom => symptom.toLowerCase().includes(searchLower))
    );
  });

  const viewMore = (item: MedicationItem) => {
    navigate(`/medication/${item.id}`, { state: item });
  };

  return (
    <Container size="xl" py="xl">
      <Title order={1} ta="center" mb="xl">Medication Search</Title>
      
      <TextInput
        placeholder="Search medications by name, symptoms, or category..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.currentTarget.value)}
        size="md"
        mb="xl"
      />

      {filteredItems.length === 0 ? (
        <Center>
          <Text>No medications found</Text>
        </Center>
      ) : (
        <Group align="stretch">
          {(searchQuery ? filteredItems : allMedications).map((item) => (
            <Card key={item.id} w={400} shadow="sm" p="lg" mb="sm" radius='lg'>
              <Flex direction="column" justify="space-between" style={{ height: '100%' }}>
                <div>
                  <Group justify="space-between" mb="md">
                    <Text fw={500} onClick={() => viewMore(item)} style={{ cursor: 'pointer' }}>
                      {item.title || item.name}
                    </Text>
                    <Button
                      variant="subtle"
                      size="compact-sm"
                      onClick={() => viewMore(item)}
                      leftSection={<IconEye size={24} />}
                    >
                      View More
                    </Button>
                  </Group>
                  <Text
                    size="sm"
                    c="dimmed"
                    lineClamp={4}
                    onClick={() => viewMore(item)}
                    style={{ cursor: 'pointer' }}
                  >
                    {item.description}
                  </Text>
                  {item.category && (
                    <Text size="sm" c="blue" mt="xs">
                      Category: {item.category}
                    </Text>
                  )}
                  {item.genericName && (
                    <Text size="sm" c="dimmed" mt="xs">
                      Generic Name: {item.genericName}
                    </Text>
                  )}
                </div>

                {sessionStorage.getItem('isLogged') === 'true' && (
                  <Group justify="space-between" style={{ marginTop: 'auto', paddingTop: 16 }}>
                    <SaveMedication {...item} />
                    <AddReview {...item} />
                  </Group>
                )}
              </Flex>
            </Card>
          ))}
        </Group>
      )}
    </Container>
  );
};

export default HomePage;
