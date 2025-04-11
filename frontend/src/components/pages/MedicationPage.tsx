import { Anchor, Box, Container, Grid, Group, Paper, SimpleGrid, Text, Title, Affix, Button, Drawer } from '@mantine/core';
import { useState } from 'react'
import { useLocation } from 'react-router-dom';
import AddReview from '../AddReview';
import ReviewCard from '../ReviewCard';
import MedicationDetails from '../MedicationDetails';
import ScrollToTop from '../ScrollToTop';

const MedicationPage = () => {
    const location = useLocation();
    const medication = location.state;
    const [activeSection, setActiveSection] = useState('overview');
    const [tocOpened, setTocOpened] = useState(false);

    const sections = [
        { id: "overview", label: 'Overview', order: 1 },
        // { label: 'Getting Started', link: '#getting-started', order: 1 },
        { id: "review", label: 'Review', order: 2 },
        // { label: 'Usage', link: '#usage', order: 2 },
        // { label: 'Advanced Features', link: '#advanced-features', order: 1 },
        // { label: 'Customization', link: '#customization', order: 2 },
        // { label: 'API Reference', link: '#api-reference', order: 2 },
        // { label: 'Conclusion', link: '#conclusion', order: 1 },
    ];

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

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      };
    
    return (
        <Container fluid mx={50}>
          <Grid>
            {/* Table of Contents */}
            <Grid.Col span={2} style={{ position: 'sticky', top: 80, height: 'fit-content' }}>
              <Paper p="md" shadow="sm" radius="md" withBorder>
                <Text size="lg" fw={700} mb="sm">Contents</Text>
                {sections.map((section) => (
                    <Anchor
                        key={section.id}
                        onClick={() => { setActiveSection(section.id); scrollToSection(section.id)}}
                        color={activeSection === section.id ? 'blue' : 'dark'}
                        weight={activeSection === section.id ? 600 : 400}
                        style={{ display: 'block', marginBottom: 12, fontSize: 16 }}
                    >
                        {section.label}
                    </Anchor>
                ))}
              </Paper>
            </Grid.Col>

            {/* Main Content */}
            <Grid.Col span={10}>
              {/* Overview Section */}
              <Box id="overview" mb={50}>
                <Title size={35} fw={700} ta="center" td="underline" order={2} mb="xl">
                  {medication.title}
                </Title>
                <MedicationDetails />
              </Box>
    
              {/* Reviews Section */}
              <Box id="review" mb={50}>
                <SimpleGrid cols={1}>
                  <Group justify="space-between" mb="lg">
                    <Title size={30} fw={700} td="underline">Reviews</Title>
                    <AddReview {...medication} />
                  </Group>
                  {reviews?.map((review) => (
                    <ReviewCard 
                      key={review.id}
                      id={review.id}
                      username={review.username}
                      createdOn={review.createdOn}
                      comment={review.comment}
                    />
                  ))}
                </SimpleGrid>
              </Box>
            </Grid.Col>
          </Grid>
    
          {/* Mobile TOC Button - Only shown on small screens */}
          <Affix position={{ bottom: 20, left: 20 }} display={{ base: 'block', md: 'none' }}>
            <Button 
              onClick={() => setTocOpened(true)}
              variant="filled"
              radius="xl"
              size="compact-lg"
            >
              Table of Contents
            </Button>
          </Affix>
    
          {/* Mobile TOC Drawer */}
          <Drawer
            opened={tocOpened}
            onClose={() => setTocOpened(false)}
            title="Table of Contents"
            position="bottom"
            size="60%"
            display={{ base: 'block', sm: 'none' }}
          >
            {sections.map((section) => (
              <Anchor
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                color={activeSection === section.id ? 'blue' : 'dark'}
                weight={activeSection === section.id ? 600 : 400}
                style={{ display: 'block', marginBottom: 12, fontSize: 16 }}
              >
                {section.label}
              </Anchor>
            ))}
          </Drawer>
    
          <ScrollToTop />
        </Container>
      );
}

export default MedicationPage