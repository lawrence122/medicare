import { Anchor, Box, Container, Grid, Group, Paper, SimpleGrid, Text, Title, Affix, Button, Drawer, Loader } from '@mantine/core';
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import AddReview from '../AddReview';
import ReviewCard from '../ReviewCard';
import MedicationDetails from '../MedicationDetails';
import ScrollToTop from '../ScrollToTop';
import { useGlobal } from '../../utils/GlobalContext';
import { sampleReviews } from '../../utils/testData';
import { SaveMedication } from '../SaveMedication';

const MedicationPage = () => {
  const location = useLocation();
  const medication = location.state;
  const [activeSection, setActiveSection] = useState('overview');
  const [tocOpened, setTocOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sections = [
    { id: "overview", label: 'Overview', order: 1 },
    { id: "review", label: 'Review', order: 2 },
  ];

  const { reviews, setReviews, } = useGlobal();

  useEffect(() => {
    const loadReviews = async () => {
      setIsLoading(true);
      try {
        // TODO
        await new Promise(resolve => setTimeout(resolve, 5000));
        setReviews(sampleReviews);
      } catch (error) {
        console.error('Failed to load reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    loadReviews();
  }, []);

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
        <Grid.Col
          span={2} style={{ position: 'sticky', top: 80, height: 'fit-content' }} 
          display={{ base: 'none', md: 'grid' }}
        >
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
            <Title size={35} fw={700} ta="center" order={2} mb="xl">
              {medication.title}
              <Group justify='flex-end' mb={20}>
                <SaveMedication {...medication} />
              </Group>
            </Title>
            <MedicationDetails />
          </Box>

          {/* Reviews Section */}
          {isLoading ? (
            <Group justify='center'>
              <Text ta='center' size='xl' fw={700} >Loading reviews</Text>
              <Loader size={35} type="dots" />
            </Group>
          ) : (
            <Box id="review" mb={50}>
              <SimpleGrid cols={1}>
                <Group justify="space-between" mb="lg">
                  <Title size={30} fw={700} td="underline">Reviews</Title>
                  {
                    sessionStorage.getItem('isLogged') === 'true' && (
                      <AddReview {...medication} />
                    )
                  }
                </Group>
                {
                  reviews?.map((review) => (
                    <ReviewCard
                        {...review}
                    />
                  ))
                }
              </SimpleGrid>
            </Box>
            )}
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