import React, { useState } from "react";
import { Affix, Card, CloseButton, Container, Fieldset, FileInput, Group, Input, PasswordInput, Rating, ScrollArea, ScrollAreaAutosize, SegmentedControl, Stack, TagsInput, Text, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MedicationItem } from "../../interfaces/MedicationItem";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const [value, setValue] = useState('Clear me');
  const [visible, { toggle }] = useDisclosure(false);

  const [items] = useState<MedicationItem[]>([
    {
      id: 1,
      title: "First Item",
      description: "This is the first item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
    {
      id: 2,
      title: "Second Item",
      description: "This is the second item description",
    },
    {
      id: 3,
      title: "Third Item",
      description: "This is the third item description",
    },
  ]);

  return (
    <Container fluid mx={"5%"} style={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
        <div style={{ position: 'sticky',
            top: 60,
            zIndex: 100,
            backgroundColor: 'white',
            padding: '10px',
        }} >
          <TextInput
            placeholder="Search medication..."
            size="xl"
            style={{ width: "90%", margin: "25px auto" }}
            value={searchQuery}
          />
        </div>

      <ScrollArea.Autosize mt={"15"} style={{ maxHeight: 'calc(100vh - 60px)' }} >
        <Group>
          {items.map((item) => (
            <Card key={item.id} shadow="sm" p="lg" mb="sm">
              <Text fw={500}>{item.title}</Text>
              <Text size="sm" c="dimmed">
                {item.description}
              </Text>
            </Card>
          ))}
        </Group>
      </ScrollArea.Autosize>
    </Container>
  );
};

export default HomePage;
