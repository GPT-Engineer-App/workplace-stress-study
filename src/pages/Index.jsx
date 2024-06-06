import { Container, Text, VStack, Heading, Box, Image, IconButton, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { FaChartBar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Healthy Working
        </Heading>
        <Text fontSize="xl" textAlign="center">
          A study on stress in the workplace
        </Text>

        <Box>
          <Image src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBzdHJlc3N8ZW58MHx8fHwxNzE3NjcxMjM0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Workplace Stress" borderRadius="md" />
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Introduction
          </Heading>
          <Text fontSize="md">In today's fast-paced work environment, stress has become a common issue affecting employees' health and productivity. This study aims to quantify the levels of stress experienced by employees in various industries and identify key factors contributing to workplace stress.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Methodology
          </Heading>
          <Text fontSize="md">The study was conducted using a quantitative approach, surveying 500 employees from different sectors. Data was collected through structured questionnaires focusing on stress levels, work environment, and coping mechanisms.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Results
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Industry</Th>
                <Th>Average Stress Level</Th>
                <Th>Primary Stress Factor</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>IT</Td>
                <Td>7.8</Td>
                <Td>Workload</Td>
              </Tr>
              <Tr>
                <Td>Healthcare</Td>
                <Td>8.5</Td>
                <Td>Long Hours</Td>
              </Tr>
              <Tr>
                <Td>Education</Td>
                <Td>6.9</Td>
                <Td>Administrative Tasks</Td>
              </Tr>
              <Tr>
                <Td>Finance</Td>
                <Td>7.2</Td>
                <Td>Deadlines</Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Discussion
          </Heading>
          <Text fontSize="md">The results indicate that stress levels vary significantly across industries, with healthcare workers experiencing the highest levels of stress. Workload and long hours are the primary stress factors identified. These findings suggest the need for targeted interventions to reduce stress and improve employee well-being.</Text>
        </Box>

        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Conclusion
          </Heading>
          <Text fontSize="md">Addressing workplace stress is crucial for maintaining a healthy and productive workforce. Employers should consider implementing stress management programs and promoting a supportive work environment to mitigate the adverse effects of stress.</Text>
        </Box>

        <Box textAlign="center">
          <IconButton aria-label="View Chart" icon={<FaChartBar />} size="lg" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
