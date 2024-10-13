import { Box, Flex, Heading, List, ListItem, Text } from '@chakra-ui/react';

const RightSideBar = () => {
  return (
    <Flex
      bgColor="#F0F1F3"
      h="100%"
      py={{ xs: '40px', md: '80px', lg: '0px' }}
      flexDir={{ xs: 'column', md: 'row', lg: 'column' }}
      gap={{ xs: '40px', md: '97px', lg: '60px' }}
      justifyContent={{ xs: 'center', lg: 'start' }}
      alignItems={{ xs: 'center', md: 'baseline', lg: 'center' }}
    >
      <Box w="288px">
        <Heading fontSize="14px" textAlign="center" mb="20px" color="#212121">
          Summary for 06/20/2020
        </Heading>
        <List color="#9B9FAA">
          <ListItem display="flex" justifyContent="space-between">
            <Text>Left</Text>
            <Text>000 kcal</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Consumed</Text>
            <Text>000 kcal</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>Daily rate</Text>
            <Text>000 kcal</Text>
          </ListItem>
          <ListItem display="flex" justifyContent="space-between">
            <Text>n% of normal</Text>
            <Text>000 kcal</Text>
          </ListItem>
        </List>
      </Box>
      <Box w="288px">
        <Heading
          as="h3"
          fontSize="14px"
          textAlign="center"
          justifyContent="space-between"
          mb="20px"
          color="#212121"
        >
          Food not recommended
        </Heading>
        <List color="#9B9FAA">
          <ListItem display="flex" justifyContent="space-between">
            <Text w="100%" textAlign="center">
              Your diet will be displayed here
            </Text>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default RightSideBar;
