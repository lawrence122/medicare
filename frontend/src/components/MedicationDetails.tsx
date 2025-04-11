import { PieChart, RadarChart, RadialBarChart } from '@mantine/charts';
import { Grid, Group, Image, Text } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { data } from '../utils/testData';

const MedicationDetails = () => {
    const location = useLocation();
    const medication = location.state;

    return(
        <>
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
            {/* <Grid.Col span={{ lg: 3, md: 6}} > */}
                <PieChart withLabelsLine labelsPosition="outside" labelsType="percent" withLabels data={data} />;
                <RadialBarChart data={data} dataKey="value" h={220} withLegend />
                <RadarChart
                    h={300}
                    data={data}
                    dataKey="product"
                    withPolarRadiusAxis
                    series={[
                        { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
                        { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
                      ]}
                />
            {/* </Grid.Col> */}
        </Grid>
        <PieChart withLabelsLine labelsPosition="outside" labelsType="percent" withLabels data={data} />;
        {/* <Group> */}
            <RadialBarChart data={data} dataKey="value" h={220} withLegend />
        {/* </Group> */}
        <RadarChart
            h={300}
            data={data}
            dataKey="product"
            withPolarRadiusAxis
            series={[
                { name: 'Sales January', color: 'lime.4', opacity: 0.1 },
                { name: 'Sales February', color: 'cyan.4', opacity: 0.1 },
                ]}
        />
        </>
    )
}

export default MedicationDetails