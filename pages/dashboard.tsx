import dynamic from "next/dynamic";
import { Header } from "../src/components/Header";
import { Sidebar } from "../src/components/Sidebar";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
/*we import the chart component using dynamic to disable ssr since Chart is not supported 
by Next's server*/
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
})

//graph options
const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-12-05T00:00:00.000Z',
      '2021-12-06T00:00:00.000Z',
      '2021-12-07T00:00:00.000Z',
      '2021-12-08T00:00:00.000Z',
      '2021-12-09T00:00:00.000Z',
      '2021-12-10T00:00:00.000Z',
      '2021-12-11T00:00:00.000Z',
    ]
  },
  colors: [theme.colors.pink[500]],
  fill: {
    opacity: 0.3,
    
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  { name: "series1", data: [31, 210, 42, 69, 189, 101, 170] }
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">Weekly subscribers</Text>
            <Chart type="area" height={160} options={options} series={series}/>
          </Box>
          <Box p="8" pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">Opening ratio</Text>
            <Chart type="area" height={160} options={options} series={series}/>
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}