import { PieChart, RadarChart, RadialBarChart } from '@mantine/charts';
import { Card, Grid, Group, Image, SimpleGrid, Text } from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { data } from '../utils/testData';

const MedicationDetails = () => {
    const location = useLocation();
    const medication = location.state;

    const pieData = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
    ];

    const radialBarData = [
        { name: 'Effectiveness', value: 75, color: 'blue.6' },
        { name: 'Side Effects', value: 25, color: 'red.6' },
        { name: 'Compliance', value: 60, color: 'green.6' },
    ];
    
    const radarData = [
        { metric: 'Pain Relief', currentValue: 80, previousValue: 65 },
        { metric: 'Duration', currentValue: 70, previousValue: 60 },
        { metric: 'Tolerability', currentValue: 90, previousValue: 85 },
        { metric: 'Cost', currentValue: 50, previousValue: 40 },
    ];

    return (
        <>
          <Grid>
            <Grid.Col span={{ lg: 3, md: 6 }}>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                variant='transparent'
                radius={75}
                w={250}
                h={250}
              />
            </Grid.Col>
            <Grid.Col span={{ lg: 9, md: 6 }}>
              <Text>{medication.description}</Text>
            </Grid.Col>
          </Grid>
      
          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="xl" mt="xl">
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <PieChart 
                  withLabelsLine 
                  labelsPosition="outside" 
                  labelsType="percent" 
                  withLabels 
                  data={data} 
                  h={300}
                />
              </Card.Section>
              <Text ta="center" fw={500} mt="sm">Medication Distribution</Text>
            </Card>
      
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                <RadialBarChart 
                    data={radialBarData}
                    dataKey="value"
                    h={300}
                    withLegend
                    tooltipProps={{
                        formatter: (value) => `${value}%`,
                    }}
                    // color="blue.6"
                    // color={({ color }) => color}
                />
                </Card.Section>
                <Text ta="center" fw={500} mt="sm">Effectiveness Analysis</Text>
            </Card>
      
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <RadarChart
                        h={300}
                        data={radarData.map(item => ({
                            metric: item.metric,
                            'Current Month': item.currentValue,
                            'Previous Month': item.previousValue
                        }))}
                        dataKey="metric"
                        series={[
                            { name: 'Current Month', color: 'lime.4' },
                            { name: 'Previous Month', color: 'cyan.4' }
                        ]}
                        withPolarRadiusAxis
                    />
                </Card.Section>
                <Text ta="center" fw={500} mt="sm">Performance Metrics</Text>
            </Card>
          </SimpleGrid>
        </>
    );
}

export default MedicationDetails