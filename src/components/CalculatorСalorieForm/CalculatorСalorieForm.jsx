import { Box, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import InputField from 'components/InputField/InputField';

import MainButton from 'components/Button/MainButton';

import { Form, Title, NameLabel } from './CalculatorСalorieForm.styled';

export default function CalculatorСalorieForm({
  handleSubmit,
  handleChange,
  handleRadio,
}) {
  return (
    <>
      <Title>Calculate your daily calorie intake right now</Title>
      <Form onSubmit={handleSubmit}>
        <Box
          display="flex"
          gap={{ md: '32px' }}
          flexDirection={{ xs: 'column', md: 'row' }}
          width={{ xs: '100%' }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            minWidth={{ xs: '100%', md: '240px' }}
          >
            <InputField
              labelName="Height *"
              type="number"
              name="heightUser"
              handlerEvent={handleChange}
              required
              width="100%"
            />
            <InputField
              labelName="Age *"
              type="number"
              name="ageUser"
              handlerEvent={handleChange}
              required
              width="100%"
            />
            <InputField
              labelName="Current weight *"
              type="number"
              name="currentWeightUser"
              handlerEvent={handleChange}
              required
              width="100%"
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            gap="10px"
            minWidth={{ xs: '100%', md: '240px' }}
          >
            <InputField
              labelName="Desired weight *"
              type="number"
              name="desiredWeightUser"
              handlerEvent={handleChange}
              required
              width="100%"
            />
            {/* <InputField
              labelName="Blood type *"
              type="number"
              name="bloodType"
              value="1"
              handlerEvent={handlerEvent}
              required
              width="100%"
              disable
            /> */}
            <NameLabel>Blood type *</NameLabel>
            <RadioGroup
              onChange={handleRadio}
              name="bloodTypeUser"
              defaultValue="1"
            >
              <Stack direction="row" spacing={10}>
                <Radio value="1" w="20px" size="lg" colorScheme="orange">
                  1
                </Radio>
                <Radio value="2" w="20px" size="lg" colorScheme="orange">
                  2
                </Radio>
                <Radio value="3" w="20px" size="lg" colorScheme="orange">
                  3
                </Radio>
                <Radio value="4" w="20px" size="lg" colorScheme="orange">
                  4
                </Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <MainButton type="submit" text="Start losing weight" />
      </Form>
    </>
  );
}
