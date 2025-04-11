import { Container, TextInput, Fieldset, FileInput, Input, CloseButton, Group, Rating, SegmentedControl, TagsInput, Stepper, Button, Anchor, Breadcrumbs, Loader, } from '@mantine/core'
// import { useDisclosure } from '@mantine/hooks';
// import { DateTimePicker } from '@mantine/dates';
import { useState } from 'react'
import { Mood } from '../Mood';

const Testing = () => {
    const [value, setValue] = useState('Clear me');
    // const [visible, { toggle }] = useDisclosure(false);
    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
    const items = [
        { title: 'Mantine', href: '#' },
        { title: 'Mantine hooks', href: '#' },
        { title: 'use-id', href: '#' },
      ].map((item, index) => (
        <Anchor href={item.href} key={index}>
          {item.title}
        </Anchor>
      ));

    
  return (
    <Container>
        <Breadcrumbs>{items}</Breadcrumbs>
        <Breadcrumbs separator="→" separatorMargin="md" mt="xs">
            {items}
        </Breadcrumbs>

        <Loader type="bars" />
        <Loader type="dots" />
        <Loader color="red" />

        <Mood />

        {/* <DateTimePicker withSeconds label="Pick date and time" placeholder="Pick date and time" /> */}
        
        <Fieldset legend="Personal information">
            <TextInput label="Your name" placeholder="Your name" />
            <TextInput label="Email" placeholder="Email" mt="md" />
        </Fieldset>

        <FileInput
            accept="image/png,image/jpeg"
            clearable
            label="Input label"
            withAsterisk
            description="Input description"
            error="bjnnnm"
            placeholder="Input placeholder"
        />

        <Input
            placeholder="Clearable input"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
            rightSectionPointerEvents="all"
            mt="md"
            rightSection={
            <CloseButton
                aria-label="Clear input"
                onClick={() => setValue("")}
                style={{ display: value ? undefined : "none" }}
            />
            }
        />

        <Group>
            <div>Fractions: 4</div>
            <Rating fractions={4} defaultValue={3.75} />
        </Group>

        <SegmentedControl
            color="green"
            data={["React", "Angular", "Vue", "Svelte"]}
        />

        <TagsInput
            label="Press Enter to submit a tag"
            description="Add up to 3 tags"
            placeholder="Enter tag"
            maxTags={3}
            defaultValue={["first", "second"]}
        />

        <Stepper active={active} onStepClick={setActive}>
            <Stepper.Step label="First step" description="Create an account">
            Step 1 content: Create an account
            </Stepper.Step>
            <Stepper.Step label="Second step" description="Verify email" loading>
            Step 2 content: Verify email
            </Stepper.Step>
            <Stepper.Step label="Final step" description="Get full access">
            Step 3 content: Get full access
            </Stepper.Step>
            <Stepper.Completed>
            Completed, click back button to get to previous step
            </Stepper.Completed>
        </Stepper>

        <Group justify="center" mt="xl">
            <Button variant="default" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep}>Next step</Button>
        </Group>
    </Container>
  )
}

export default Testing