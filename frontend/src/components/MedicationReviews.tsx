import { Stack, Text, Group, Avatar, Rating, Paper, Divider } from '@mantine/core';

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpfulCount: number;
}

interface MedicationReviewsProps {
  reviews: Review[];
}

const MedicationReviews = ({ reviews }: MedicationReviewsProps) => {
  return (
    <Stack>
      <Text size="xl" fw={500}>Reviews</Text>
      {reviews.length === 0 ? (
        <Text c="dimmed">No reviews yet</Text>
      ) : (
        reviews.map((review) => (
          <Paper key={review.id} p="md" withBorder>
            <Group justify="space-between" mb="xs">
              <Group>
                <Avatar color="blue" radius="xl">
                  {review.userName.charAt(0)}
                </Avatar>
                <div>
                  <Text fw={500}>{review.userName}</Text>
                  <Text size="sm" c="dimmed">{review.date}</Text>
                </div>
              </Group>
              <Rating value={review.rating} readOnly />
            </Group>
            <Text mt="sm">{review.comment}</Text>
            <Group mt="sm">
              <Text size="sm" c="dimmed">
                {review.helpfulCount} people found this helpful
              </Text>
            </Group>
          </Paper>
        ))
      )}
    </Stack>
  );
};

export default MedicationReviews; 