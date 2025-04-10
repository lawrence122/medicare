import { Card, Group, Avatar, SimpleGrid, Text } from '@mantine/core'
import { ReviewCardProps } from '../interfaces/ReviewItem'

const ReviewCard = ({ id, username, createdOn, comment }: ReviewCardProps) => {
  return (
    <Card key={id} shadow="sm" p="lg" mb="sm" >
        <Group mb={15} >
            <Avatar
                size={50}
                key={username}
                name={username}
                color='initials' allowedInitialsColors={['thistle', 'ultra-violet', 'sea-green']}
            />
            <SimpleGrid cols={1} verticalSpacing="xs" >
                <Text fw={500} >{username}</Text>
                <Text size='sm' c="dimmed" >{new Date(createdOn).toLocaleString()}</Text>
            </SimpleGrid>
        </Group>
        <Text ml={65} >{comment}</Text>
    </Card>
  )
}

export default ReviewCard