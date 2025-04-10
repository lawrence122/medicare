import { Grid, Image, Text } from '@mantine/core';
import { useLocation } from 'react-router-dom';

const MedicationDetails = () => {
    const location = useLocation();
    const medication = location.state;

    return(
        <Grid>
            <Grid.Col span={{ lg: 3, md: 6}} >
                <Image
                    src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                    variant='transparent'
                    radius={75}
                    w={250}
                    h={250}
                />
            </Grid.Col>
            <Grid.Col span={{ lg: 9, md: 6}} >
                <Text>{medication.description}</Text>
            </Grid.Col>
        </Grid>
    )
}

export default MedicationDetails