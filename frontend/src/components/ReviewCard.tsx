import { Card, Group, Avatar, SimpleGrid, Text, Box, Divider, List } from '@mantine/core'
import { ReviewItem } from '../interfaces/ReviewItem'

const ReviewCard = (review: ReviewItem) => {
  return (
    <Card key={review.id} shadow="sm" p="lg" mb="sm" radius="lg">
      <Group mb={15}>
        <Avatar
          size={50}
          key={review.username ?? 'anonymous'}
          name={review.username ?? 'Anonymous'}
          color='initials'
          allowedInitialsColors={['thistle', 'ultra-violet', 'sea-green']}
        />
        <SimpleGrid cols={1} verticalSpacing="xs">
          <Text fw={500}>{review.username || 'Anonymous'}</Text>
          <Text size='sm' c="dimmed">{new Date(review.createdOn).toLocaleString()}</Text>
        </SimpleGrid>
      </Group>

      <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs" mt="md" ml={65}>
        <Group gap={5}>
          <Text size="sm" fw={600}>Dosage:</Text>
          <Text>{review.dosage || 'Not specified'}</Text>
        </Group>
        <Group gap={5}>
          <Text size="sm" fw={600}>Frequency:</Text>
          <Text>{review.frequency || 'Not specified'}</Text>
        </Group>
        <Group gap={5}>
          <Text size="sm" fw={600}>Route:</Text>
          <Text>{review.routeAdmin.join(', ') || 'Not specified'}</Text>
        </Group>
        <Group gap={5}>
          <Text size="sm" fw={600}>Duration:</Text>
          <Text>{review.duration ? `${review.duration} days` : 'Not specified'}</Text>
        </Group>
      </SimpleGrid>

      <Divider my="md" />

      <Box ml={65}>
        <Text size="sm" fw={600}>Side Effects:</Text>
        {review.sideEffect.length > 0 ? (
          <List size="sm" spacing="xs">
            {review.sideEffect.map((effect, index) => (
              <List.Item key={index}>{effect}</List.Item>
            ))}
          </List>
        ) : (
          <Text size="sm" c="dimmed">No side effects reported</Text>
        )}
      </Box>

      <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs" mt="md" ml={65}>
        <Group gap={5}>
          <Text size="sm" fw={600}>Severity:</Text>
          <Text>{review.severity || 'Not specified'}</Text>
        </Group>
        <Group gap={5}>
          <Text size="sm" fw={600}>Onset:</Text>
          <Text>{review.onset || 'Not specified'}</Text>
        </Group>
        <Group gap={5}>
          <Text size="sm" fw={600}>Lasted:</Text>
          <Text>{review.lasted ? `${review.lasted} days` : 'Not specified'}</Text>
        </Group>
        <Group gap={5}>
          <Text size="sm" fw={600}>Impact:</Text>
          <Text>{review.impact || 'Not specified'}</Text>
        </Group>
      </SimpleGrid>

      <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs" mt="md" ml={65}>
        <Group gap={5}>
          <Text size="sm" fw={600}>Medical Help Sought:</Text>
          <Text>{review.helpSought || 'Not specified'}</Text>
        </Group>
        <Group gap={5}>
          <Text size="sm" fw={600}>Condition Improved:</Text>
          <Text>{review.improved || 'Not specified'}</Text>
        </Group>
        <Group gap={5}>
          <Text size="sm" fw={600}>Medication Stopped:</Text>
          <Text>{review.medStopped || 'Not specified'}</Text>
        </Group>
      </SimpleGrid>
    </Card>
  )
}

export default ReviewCard