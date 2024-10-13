import { useState } from 'react';
import { FormLabel, Icon } from '@chakra-ui/react';
import { MdDateRange } from 'react-icons/md';
import 'flatpickr/dist/themes/material_orange.css';
import css from './DiaryDateCalendar.module.css';

import Flatpickr from 'react-flatpickr';

export default function DiaryDateCalendar() {
  const [date, setDate] = useState(new Date());

  return (
    <FormLabel
      display="flex"
      alignItems="center"
      maxW={{ xs: '156px', md: '260px', lg: '280px' }}
      fontSize={{ xs: '18px', md: '34px' }}
      lineHeight={{ xs: '21px', md: '41px' }}
      color="#212121"
      cursor="pointer"
    >
      <Flatpickr
        options={{ dateFormat: 'd.m.Y', disableMobile: true }}
        className={css.field}
        value={date}
        onChange={([e]) => {
          setDate(e);
        }}
      />
      <Icon
        marginLeft={{
          xs: '-20px',
          md: '-20px',
          lg: '-37px',
        }}
        w="20px"
        h="20px"
        color="#9b9faa"
        as={MdDateRange}
      />
    </FormLabel>
  );
}
