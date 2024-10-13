import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { dailyRate } from 'redux/dailyRate/dailtyRateOperations';

import { ModalOverlay, useDisclosure } from '@chakra-ui/react';
import ModalWindow from 'components/Modal/Modal';
import CalculatorСalorieForm from '../../components/CalculatorСalorieForm/CalculatorСalorieForm';
import { BgImg } from './HomePage.styled';

const HomePage = () => {
  const dispatch = useDispatch();

  // Modal window
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
    dispatch(dailyRate(dataUser));
    setOverlay(<OverlayOne />);
    onOpen();
  };

  return (
    <>
      <BgImg />
      <CalculatorСalorieForm
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleRadio={handleRadio}
      />
      <ModalWindow overlay={overlay} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default HomePage;
