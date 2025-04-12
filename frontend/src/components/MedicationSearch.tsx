import { useState, useEffect } from 'react';
import { TextInput, Paper, Group, Text, Stack, Badge, Image, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { medications, Medication } from '../data/medications';

export const MedicationSearch = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<Medication[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (search.trim() === '') {
      setResults([]);
      return;
    }

    const searchLower = search.toLowerCase();
    const filtered = medications.filter(med => 
      med.name.toLowerCase().includes(searchLower) ||
      med.genericName.toLowerCase().includes(searchLower) ||
      med.symptoms.some(symptom => symptom.toLowerCase().includes(searchLower)) ||
      med.category.toLowerCase().includes(searchLower)
    );
    setResults(filtered.slice(0, 5)); // Limit to 5 results
  }, [search]);

  const handleMedicationClick = (medication: Medication) => {
    navigate('/medication-details', { state: medication });
  };

  return (
    <Stack gap="md">
      <TextInput
        placeholder="Search medications by name, symptoms, or category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        size="md"
      />
      
      {results.length > 0 && (
        <Paper shadow="sm" p="md">
          {results.map((med) => (
            <Group 
              key={med.id} 
              justify="space-between" 
              mb="xs"
              style={{ cursor: 'pointer' }}
              onClick={() => handleMedicationClick(med)}
            >
              <Group>
                <Image
                  src={med.imageUrl}
                  alt={med.name}
                  w={50}
                  h={50}
                  radius="md"
                  fallbackSrc="https://placehold.co/50x50?text=No+Image"
                />
                <Stack gap={0}>
                  <Text fw={500}>{med.name}</Text>
                  <Text size="sm" c="dimmed">{med.genericName}</Text>
                  <Group gap="xs">
                    <Badge size="sm">{med.category}</Badge>
                    <Badge size="sm" color="blue">${med.price.generic} - ${med.price.brand}</Badge>
                  </Group>
                </Stack>
              </Group>
              <Button variant="light" size="sm">View Details</Button>
            </Group>
          ))}
        </Paper>
      )}
    </Stack>
  );
}; 