import { Button, Center, SimpleGrid, Stack, Text } from '@mantine/core'

const ErrorPage = () => {
  return (
    <Center style={{ height: '100vh', backgroundColor: '#f8f9fa' }}>
      <Stack align="center" gap="md" style={{ marginTop: '-15vh' }}>
        <Text
          size="200px"
          fw={900}
          color="thistle.3"
          style={{
            position: 'relative',
            zIndex: 0,
            lineHeight: 0.75,
            userSelect: 'none',
          }}
        >
          Sorryyy
        </Text>
        
        <Stack gap={0} align="center" style={{ position: 'relative', zIndex: 1 }}>
          <Text size="24px" fw={700} color="ultra-violet">
            Not sure where you're going
          </Text>
          <Text size="lg" color="ultra-violet.4" mt="sm">
            But we don't have it
          </Text>
        </Stack>

        <Button
          component="a"
          href="/"
          size="compact-sm"
          radius="md"
          style={{
            backgroundColor: 'ultra-violet',
            color: 'white',
            position: 'relative',
            zIndex: 1,
          }}
        >
          GO TO HOMEPAGE
        </Button>
      </Stack>
    </Center>
  );
};

export default ErrorPage