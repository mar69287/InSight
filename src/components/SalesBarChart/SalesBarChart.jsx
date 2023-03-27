import { ResponsiveBar } from '@nivo/bar'
import { useState, useEffect } from 'react';
import { getCompanies } from '../../utilities/companies-api';

export default function SalesBarChart({ lightMode }) {
    const [data, setData] = useState([]);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        async function fetchSalesData() {
            const companies = await getCompanies();
            const salesData = companies.map(company => ({
                id: company.name,
                Sales: company.sales
            }));
            setData(salesData);
        }
        fetchSalesData();

        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const lineGraphSettings = {
        theme: {
            fontSize: '.9rem',
            textColor: lightMode ? '#31335a' : '#7d8a99',
        },
    };

    return (
        <ResponsiveBar
            data={data}
            keys={['Sales']}
            indexBy="id"
            margin={{
                top: 10, right: width > 700 ? 50 : 10,
                bottom: width > 700 ? 50 : 10, left: 70
            }}
            padding={0.5}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={{ scheme: 'set2' }}
            theme={lineGraphSettings.theme}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: '#38bcb2',
                    size: 4,
                    padding: 1,
                    stagger: true
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: '#eed312',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10
                }
            ]}
            borderColor={{ theme: 'background' }}
            axisTop={null}
            axisRight={null}
            axisBottom={width > 700 ? {
                tickSize: 5,
                tickPadding: 10,
                tickTextColor: '#333333'
            } : null}
            axisLeft={{
                tickSize: 6,
                tickPadding: 10,
                tickRotation: 0,
                tickTextColor: '#333333',
                legendPosition: 'middle',

                legendTextColor: '#333333'
            }}
            enableLabel={false}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        '1'
                    ]
                ]
            }}

            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
        />
    )
}
