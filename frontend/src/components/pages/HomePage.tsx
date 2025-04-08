import React, { useState } from "react";
import { Card, Container, Group, ScrollArea, Text, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MedicationItem } from "../../interfaces/MedicationItem";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { getGeneralContent } from "../../utils/MedicationAPI";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  
  const [value, setValue] = useState('Clear me');
  const [visible, { toggle }] = useDisclosure(false);

  // getGeneralContent()
  //   .then(data => console.log("General Content:", data))
  //   .catch(error => console.error("Error:", error));

  // // To search for a specific medication:
  // searchContent("ibuprofen", "medications")
  //   .then(data => console.log("Search Results:", data))
  //   .catch(error => console.error("Error:", error));

  const [items] = useState<MedicationItem[]>([
    {
      id: 1,
      title: "First Item",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
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
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
    // {
    //   id: 2,
    //   title: "Second Item",
    //   description: "This is the second item description",
    // },
    // {
    //   id: 3,
    //   title: "Third Item",
    //   description: "This is the third item description",
    // },
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
            onChange={() => { console.log(`Searching for somethingg: ${searchQuery}`) }} // TODO: fix this
          />
        </div>

      <ScrollArea.Autosize mt={"15"} style={{ maxHeight: 'calc(100vh - 60px)' }} >
        <Group>
          {items.map((item) => (
            <Card
              key={item.id}
              w={400}
              shadow="sm" 
              p="lg" mb="sm"
              // color="ultra-violet"
              onClick={() => { navigate(`/${item.title.replace(/\s+/g, '_').toLowerCase()}`, { state: item } ) }} // .replace(/\s+/g, '_') replaces " " by "_"
            >
              <Text fw={500} >
                {item.title}
              </Text>
              <Text
                size="sm" c="dimmed"
                lineClamp={4}
              >
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
