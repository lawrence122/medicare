import { Anchor, Box, Container, Grid, Group, Paper, SimpleGrid, Text, Title, Affix, Button, Drawer, Loader } from '@mantine/core';
import { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import AddReview from '../AddReview';
import ReviewCard from '../ReviewCard';
import MedicationDetails from '../MedicationDetails';
import ScrollToTop from '../ScrollToTop';
import { useGlobal } from '../../utils/GlobalContext';
import { sampleReviews } from '../../utils/testData';
import { SaveMedication } from '../SaveMedication';
import { medications } from '../../data/medications';
import { MedicationItem } from '../../interfaces/MedicationItem';

const MedicationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const [medication, setMedication] = useState<MedicationItem | null>(location.state || null);
  const [activeSection, setActiveSection] = useState('overview');
  const [tocOpened, setTocOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // If we don't have medication data from state, try to find it using the ID
    if (!medication && id) {
      const foundMedication = medications.find(med => med.id.toString() === id);
      if (foundMedication) {
        setMedication({
          id: foundMedication.id,
          title: foundMedication.name,
          name: foundMedication.name,
          genericName: foundMedication.genericName,
          description: foundMedication.description,
          category: foundMedication.category,
          symptoms: foundMedication.symptoms,
          dosage: foundMedication.dosage,
          sideEffects: foundMedication.sideEffects,
          interactions: foundMedication.interactions,
          manufacturer: foundMedication.manufacturer,
          imageUrl: foundMedication.imageUrl,
          effectiveness: foundMedication.effectiveness,
          averageRating: foundMedication.averageRating,
          price: foundMedication.price
        });
      } else {
        // If medication not found, redirect to home
        navigate('/home');
      }
    }
  }, [id, medication, navigate]);

  const sections = [
    { id: "overview", label: 'Overview', order: 1 },
    { id: "review", label: 'Review', order: 2 },
  ];

  const { reviews, setReviews } = useGlobal();

  useEffect(() => {
    const loadReviews = async () => {
      setIsLoading(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setReviews(sampleReviews);
      } catch (error) {
        console.error('Failed to load reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
    if (medication) {
      loadReviews();
    }
  }, [medication, setReviews]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  if (!medication) {
    return (
      <Container>
        <Loader size="xl" type="dots" />
      </Container>
    );
  }
    
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
                    fw={activeSection === section.id ? 600 : 400}
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
              {medication.title || medication.name}
              <Group justify='flex-end' mb={20}>
                <SaveMedication {...medication} />
              </Group>
            </Title>
            <MedicationDetails medication={medication} />
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
                  {sessionStorage.getItem('isLogged') === 'true' && (
                    <AddReview {...medication} />
                  )}
                </Group>
                {reviews?.map((review) => (
                  <ReviewCard key={review.id} {...review} />
                ))}
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
            fw={activeSection === section.id ? 600 : 400}
            style={{ display: 'block', marginBottom: 12, fontSize: 16 }}
          >
            {section.label}
          </Anchor>
        ))}
      </Drawer>

      <ScrollToTop />
    </Container>
  );
};

export default MedicationPage;