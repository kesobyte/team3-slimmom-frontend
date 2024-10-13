import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CalculatorСalorieForm from '../../components/CalculatorСalorieForm/CalculatorСalorieForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';

import { BgImg, Wrapper } from './CalculatorPage.styled';
import { Box } from '@chakra-ui/react';
import { dailyRateById } from 'redux/dailyRate/dailtyRateOperations';
import { authSelectors } from 'redux/auth/authSelectors';

export default function CalculatorPage() {
  const userId = useSelector(authSelectors.userId);
  const dispatch = useDispatch();

  // Form
  const [heightUser, setHeightUser] = useState(null);
  const [ageUser, setAgeUser] = useState(null);
  const [currentWeightUser, setCurrentWeightUser] = useState(null);
  const [desiredWeightUser, setDesiredWeightUser] = useState(null);
  const [bloodTypeUser, setBloodTypeUser] = useState(1);
  const handleChange = e => {
    const name = e.target.name;
    const value = Number(e.target.value);

    switch (name) {
      case 'heightUser':
        setHeightUser(value);
        break;
      case 'ageUser':
        setAgeUser(value);
        break;
      case 'currentWeightUser':
        setCurrentWeightUser(value);
        break;
      case 'desiredWeightUser':
        setDesiredWeightUser(value);
        break;

      default:
        break;
    }
  };

  const handleRadio = e => {
    setBloodTypeUser(Number(e));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const dataUser = {
      weight: currentWeightUser,
      height: heightUser,
      age: ageUser,
      desiredWeight: desiredWeightUser,
      bloodType: bloodTypeUser,
    };

    const fetchObj = { userId, dataUser };
    console.log(fetchObj);
    dispatch(dailyRateById(fetchObj));
  };

  return (
    <Wrapper>
      <Box>
        <CalculatorСalorieForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleRadio={handleRadio}
        />
      </Box>
      <Box position="relative">
        <RightSideBar />
        <BgImg />
      </Box>
    </Wrapper>
  );
}
