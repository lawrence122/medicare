import { Anchor, Avatar, Box, Burger, Card, Container, Grid, Group, Image, Paper, ScrollArea, MediaQuery, Header, Navbar, SimpleGrid, TableOfContents, Text, Title, useMantineTheme, Space } from '@mantine/core';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import TOC from '../TOC';
import AddReview from '../AddReview';
import ReviewCard from '../ReviewCard';
import MedicationDetails from '../MedicationDetails';

const MedicationPage = () => {
    const location = useLocation();
    const medication = location.state;

    const [active, setActive] = useState(2);

    const sections = [
        { id: 'overview', title: 'Overview' },
        { id: 'getting-started', title: 'Getting Started' },
        { id: 'review', title: 'Review' },
        { id: 'basic-usage', title: 'Basic Usage' },
        { id: 'advanced-features', title: 'Advanced Features' },
        { id: 'api-reference', title: 'API Reference' },
        { id: 'troubleshooting', title: 'Troubleshooting' },
        { id: 'faq', title: 'FAQ' },
      ];
  
    // const items = [
    //     { label: 'Overview', link: '#overview', order: 1 },
    //     // { label: 'Getting Started', link: '#getting-started', order: 1 },
    //     { label: 'Review', link: '#review', order: 2 },
    //     // { label: 'Usage', link: '#usage', order: 2 },
    //     // { label: 'Advanced Features', link: '#advanced-features', order: 1 },
    //     // { label: 'Customization', link: '#customization', order: 2 },
    //     // { label: 'API Reference', link: '#api-reference', order: 2 },
    //     // { label: 'Conclusion', link: '#conclusion', order: 1 },
    // ];

    const reviews = [
        {
            id: 1,
            username: "Some Username",
            createdOn: "4/2/2025, 2:00:48 PM",
            comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id: 2,
            username: "Another Username",
            createdOn: "3/22/2025, 2:00:48 PM",
            comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            id: 3,
            username: "Xncdkmck",
            createdOn: "4/2/2024, 2:00:48 PM",
            comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
    ];

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const currentPositions = sections.map(section => {
        const element = document.getElementById(`grid-${section.id}`);
        if (!element) return { id: section.id, top: 0 };
        return {
          id: section.id,
          top: element.getBoundingClientRect().top,
        };
      });

      const activeSection = currentPositions
        .filter(section => section.top <= 150)
        .slice(-1)[0];
      
      if (activeSection) {
        setActiveSection(activeSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

//   const handleTOCClick = (sectionId) => {
//     document.getElementById(`grid-${sectionId}`).scrollIntoView({ behavior: 'smooth' });
//     setActiveSection(sectionId);
//     setOpened(false);
//   };

    // const tocItems = sections.map((section) => (
    //     <Anchor
    //       key={section.id}
    //       onClick={() => handleTOCClick(section.id)}
    //       color={activeSection === section.id ? 'blue' : 'dimmed'}
    //       weight={activeSection === section.id ? 700 : 400}
    //       py={5}
    //       display="block"
    //       size="sm"
    //     >
    //       {section.title}
    //     </Anchor>
    //   ));

//   return (
    // <Box>
    //   <Header height={70} p="md" mb="lg">
    //     <Group position="apart">
    //       <Title order={3}>Documentation</Title>
    //       <MediaQuery largerThan="md" styles={{ display: 'none' }}>
    //         <Burger
    //           opened={opened}
    //           onClick={() => setOpened((o) => !o)}
    //           size="sm"
    //           color={theme.colors.gray[6]}
    //         />
    //       </MediaQuery>
    //     </Group>
    //   </Header>

    //   {/* Mobile TOC Drawer */}
    //   <MediaQuery largerThan="md" styles={{ display: 'none' }}>
    //     <Navbar
    //       p="md"
    //       hidden={!opened}
    //       style={{ position: 'fixed', top: 70, bottom: 0, zIndex: 100 }}
    //       width={{ sm: 250, lg: 300 }}
    //     >
    //       <ScrollArea>
    //         <Title order={4} mb="md">Table of Contents</Title>
    //         {tocItems}
    //       </ScrollArea>
    //     </Navbar>
    //   </MediaQuery>

    //   {/* Floating TOC on desktop */}
    //   <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
    //     <Box
    //       sx={{
    //         position: 'fixed',
    //         top: 90,
    //         right: 30,
    //         width: '20%',
    //         zIndex: 100,
    //       }}
    //     >
    //       <Paper withBorder p="md" shadow="sm">
    //         <Title order={4} mb="md">Table of Contents</Title>
    //         {tocItems}
    //       </Paper>
    //     </Box>
    //   </MediaQuery>

    //   <Container>
    //     <Box sx={{ maxWidth: '75%', marginRight: 'auto' }}>
    //       <MediaQuery smallerThan="md" styles={{ maxWidth: '100%' }}>
    //         <Box>
    //           {sections.map(section => (
    //             <Box key={section.id} id={`float-${section.id}`} mb="xl">
    //               {generateSectionContent(section.id, section.title)}
    //             </Box>
    //           ))}
    //         </Box>
    //       </MediaQuery>
    //     </Box>
    //   </Container>
    // </Box>



    // <Container fluid >
    //     <Box style={{ width: 300 }}>
    //         <TOC />
            
    //         <TableOfContents
    //             initialData={[
    //                 { id: 'overview', value: '#overview', depth: 1 },
    //                 // { label: 'Getting Started', link: '#getting-started', order: 1 },
    //                 { id: 'Review', value: '#review', depth: 2 },
    //                 // { label: 'Usage', link: '#usage', order: 2 },
    //                 // { label: 'Advanced Features', link: '#advanced-features', order: 1 },
    //                 // { label: 'Customization', link: '#customization', order: 2 },
    //                 // { label: 'API Reference', link: '#api-reference', order: 2 },
    //                 // { label: 'Conclusion', link: '#conclusion', order: 1 },
    //             ]}
    //             // active={active}
    //             // onChange={setActive}
    //             color="blue"
    //             size="sm"
    //             radius="sm"
    //             scrollSpyOptions={{
    //                 selector: '#mdx :is(h1, h2, h3, h4, h5, h6)',
    //             }}
    //             getControlProps={({ data }) => ({
    //                 onClick: () => data.getNode().scrollIntoView(),
    //                 children: data.value,
    //             })}
    //         />
    //     </Box>
//   )
return(
    <Container fluid mx={50} >
        <Grid>
            <Grid.Col
                span={12} mt={15} mb={25}
                key={"#overview"} id={"overview"}
            >
                <Title
                    size={"35px"}
                    fw={700}
                    ta={"center"}
                    td={"underline"}
                    order={2}
                >
                    {medication.title}
                </Title>
            </Grid.Col>
            <Grid.Col span={12} >
                <MedicationDetails />
            </Grid.Col>

            <Space h={75} />
            
            <Grid.Col span={12} key={"#review"} id={"review"}>
                <SimpleGrid cols={1} >
                    <Group justify="space-between">
                        <Text size={"30px"} fw={700} td={"underline"} >Reviews</Text>
                        <AddReview />
                    </Group>
                    {reviews?.map((review) => (
                        <ReviewCard id={review.id} username={review.username} createdOn={review.createdOn} comment={review.comment} />
                    ))}
                </SimpleGrid>
            </Grid.Col>
        </Grid>
    </Container>
  )
}

export default MedicationPage