import { Modal, Group, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

const DeleteAccount = () => {
    const [opened, { open, close }] = useDisclosure(false);


  return (
    <>
    <Modal opened={opened} onClose={close} title="Delete this account?" centered >
        Are you sure you want to delete this page? This action cannot be undone.
        <Group mt="lg" justify="flex-end">
        <Button onClick={close} variant="default">
            Cancel
        </Button>
        <Button onClick={() => { console.log("Deleting account"); close() }} color="red">
            Delete
        </Button>
        </Group>
    </Modal>

    <Button color='#D33F49' onClick={open}>
        Delete Account
    </Button>
    </>
  )
}

export default DeleteAccount