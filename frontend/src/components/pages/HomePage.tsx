import { useEffect, useState } from "react";
import { ActionIcon, Button, Card, Center, Container, Flex, Group, Loader, ScrollArea, Stack, Text, TextInput } from "@mantine/core";
import { MedicationItem } from "../../interfaces/MedicationItem";
import { useNavigate } from 'react-router-dom';
import { IconBookmarkOff, IconBookmarkPlus, IconEye, IconSearch, IconX } from "@tabler/icons-react";
import AddReview from "../AddReview";
import ScrollToTop from "../ScrollToTop";
import { medications } from "../../utils/testData";
import { SaveMedication } from "../SaveMedication";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState<MedicationItem[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSaving, setIsSaving] = useState<number>();
  const [savedMedications, setSavedMedications] = useState<Set<number>>(new Set());

  const handleSave = async (isSaved: boolean, medicationId: number, medicationTitle: string) => {
    // TODO
    setIsSaving(medicationId);
    try {
      await new Promise(resolve => setTimeout(resolve, 500));
      if (isSaved) {
        setSavedMedications(prev => {
          const newSet = new Set(prev);
          newSet.delete(medicationId);
          return newSet;
        });
        console.log(`Unsaved medication: ${medicationTitle}`);
      } else {
        setSavedMedications(prev => new Set(prev).add(medicationId));
        console.log(`Saved medication: ${medicationTitle}`);
      }
    } catch (error) {
      console.error('Failed to save:', error);
    } finally {
      setIsSaving(0);
    }
  };

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
      <div style={{ 
        position: 'sticky',
        top: 60,
        zIndex: 100,
        padding: '10px',
        backgroundColor: 'var(--mantine-color-body)',
      }}>
        <TextInput
          placeholder="Search medication, condition..."
          size="xl"
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
      </div>
  
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
              const isSaved = savedMedications.has(item.id);
              
              return (
                <Card key={item.id} w={400} shadow="sm" p="lg" mb="sm" >
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSave(isSaved, item.id, item.title)
                  }}>
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
                            {/* <Button 
                              w={150}
                              type="submit"
                              variant="filled"
                              color={isSaved ? "#D33F49" : "thistle"}
                              leftSection={isSaved ? <IconBookmarkOff size={18} /> : <IconBookmarkPlus size={18} />}
                              loading={isSaving === item.id}
                            >
                              {isSaved ? "Unsave" : "Save"}
                            </Button> */}
                              <AddReview {...item} />
                          </Group>
                          )
                        }
                    </Flex>
                  </form>
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
