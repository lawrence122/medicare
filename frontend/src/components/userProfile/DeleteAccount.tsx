import { Modal, Group, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

const DeleteAccount = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Delete this account?" centered >
                Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data.
                <Group mt="lg" justify="flex-end">
                    <Button onClick={close} variant="default">
                        No don't delete it
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