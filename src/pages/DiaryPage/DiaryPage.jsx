import { Box, Flex } from '@chakra-ui/react';
import DiaryDateCalendar from '../../components/DiaryDateСalendar/DiaryDateСalendar';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import RightSideBar from 'components/RightSideBar/RightSideBar';

export default function DiaryPage() {
  return (
    <Flex h="100%" flexDirection={{ xs: 'column', lg: 'row' }}>
      <Box
        w="100%"
        display="flex"
        flexDirection={'column'}
        justifyContent="center"
        gap={{ xs: '32px', md: '60px' }}

        // pt={{ xs: '160px', md: '180px', lg: '50px' }}
        // padding={{
        //   xs: '40px 20px',
        //   md: '100px 126px 55px 32px',
        //   lg: '158px 107px 56px 16px',
        // }}
      >
        <DiaryDateCalendar />
        <DiaryAddProductForm />
        <DiaryProductsList />
      </Box>
      <RightSideBar />
    </Flex>
  );
}

// DiaryPage. Верстка мобілка, планшет, десктоп. Відповідає за позиціонування на сторінці елементів та компонентів.
// Заімпортувати в цей компонент його підкомпоненти: DiaryDateСalendar, DiaryAddProductForm и DiaryProductsList. Приватна сторінка.
