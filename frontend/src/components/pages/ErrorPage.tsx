import { Center, Group, SimpleGrid, Stack, Text } from '@mantine/core'

const ErrorPage = () => {
  return (
    <Center style={{ height: '100vh' }}>
      <Stack align="center" gap="xs">
        <Text
          size={"240px"}
          fw={700}
          color="thistle.2"
          style={{
            // opacity: 0.2,
            position: 'absolute',
            zIndex: 0,
            lineHeight: 1,
          }}
        >
          Sorryyy
        </Text>
        <SimpleGrid cols={1} >
          <Text
            size={"28px"}
            fw={700} color='ultra-violet'
            style={{ position: 'relative', zIndex: 1, lineHeight: 1 }}
          >
            Error 404
          </Text>
          <Text
            size={"28px"}
            fw={700} color='ultra-violet'
            style={{ position: 'relative', zIndex: 1, lineHeight: 1 }}
          >
            Not sure where you're going but we don't have it
          </Text>
        </SimpleGrid>
      </Stack>
    </Center>
  )
}

export default ErrorPage