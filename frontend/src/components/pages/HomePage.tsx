import { useEffect, useState } from "react";
import { ActionIcon, Button, Card, Center, Container, Flex, Group, Loader, Paper, ScrollArea, Stack, Text, TextInput } from "@mantine/core";
import { MedicationItem } from "../../interfaces/MedicationItem";
import { useNavigate } from 'react-router-dom';
import { IconEye, IconSearch, IconX } from "@tabler/icons-react";
import AddReview from "../AddReview";
import ScrollToTop from "../ScrollToTop";
import { medications } from "../../utils/testData";
import { SaveMedication } from "../SaveMedication";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<MedicationItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const viewMore = (item: MedicationItem) => {
    navigate(`/${item.title.replace(/\s+/g, '_').toLowerCase()}`, { state: item } ) // .replace(/\s+/g, '_') replaces " " by "_"
  }

  const mockMedicationApi = {
    // TODO
    searchMedications: async (query: string): Promise<MedicationItem[]> => {
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const mockData = medications;

      return mockData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
    }
  };

  useEffect(() => {
    const searchMedications = async () => {
      if (!searchQuery.trim()) {
        setFilteredItems([]);
        return;
      }
  
      setIsSearching(true);
      try {
        // TODO
        const results = await mockMedicationApi.searchMedications(searchQuery);
        setFilteredItems(results);
      } catch (error) {
        console.error('Search failed:', error);
        setFilteredItems([]);
      } finally {
        setIsSearching(false);
      }
    };
  
    // prevent excessive calls
    const debounceTimer = setTimeout(searchMedications, 300);
    
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  return (
    <Container fluid mx={"5%"} style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Search Input */}
      <Paper
        shadow="sm"
        radius='xl'
        style={{ 
          position: 'sticky',
          top: 60,
          zIndex: 100,
          padding: '10px',
          backgroundColor: 'var(--mantine-color-body)',
      }}>
        <TextInput
          placeholder="Search medication, condition..."
          size="xl" radius='xl'
          style={{ width: "90%", margin: "25px auto" }}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.currentTarget.value)}
          rightSection={
            isSearching ? (
              <Loader size="sm" />
            ) : searchQuery ? (
              <ActionIcon onClick={() => setSearchQuery('')}>
                <IconX size={18} />
              </ActionIcon>
            ) : null
          }
        />
      </Paper>
  
      {/* Results Area */}
      <ScrollArea.Autosize mt={"15"} style={{ maxHeight: 'calc(100vh - 60px)' }}>
        {isSearching ? (
          <Center style={{ height: '200px' }}>
            <Loader size="xl" />
          </Center>
        ) : searchQuery && filteredItems.length === 0 ? (
          <Center style={{ height: '200px' }}>
            <Stack align="center">
              <IconSearch size={48} color="gray" />
              <Text size="xl" c="dimmed">No medications found</Text>
              <Text size="sm" c="dimmed">
                Try searching for something else
              </Text>
              <Button 
                variant="subtle" 
                onClick={() => setSearchQuery('')}
                leftSection={<IconX size={14} />}
              >
                Clear search
              </Button>
            </Stack>
          </Center>
        ) : (
          <Group align="stretch">
            {(searchQuery ? filteredItems : medications).map((item) => {
              return (
                <Card key={item.id} w={400} shadow="sm" p="lg" mb="sm" radius='lg' >
                  <Flex direction="column" justify="space-between" style={{ height: '100%' }}>
                    <div>
                      <Group justify="space-between" mb="md">
                        <Text fw={500} onClick={() => viewMore(item)} style={{ cursor: 'pointer' }}>
                          {item.title}
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
                    </div>

                    {
                      sessionStorage.getItem('isLogged') === 'true' && (
                        <Group justify="space-between" style={{ marginTop: 'auto', paddingTop: 16 }}>
                          <SaveMedication {...item} />
                          <AddReview {...item} />
                        </Group>
                        )
                      }
                  </Flex>
              </Card>
              );
            })}
          </Group>
        )}
      </ScrollArea.Autosize>
      <ScrollToTop />
    </Container>
  );
};

export default HomePage;
