import { NavLink } from 'react-router-dom';
import { Divider, Flex, Link, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/authOperations';
import { authSelectors } from 'redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.userName);

  const getStyle = ({ isActive }) =>
    isActive ? { color: '#212121' } : { color: '#9B9FAA' };

  return (
    <Flex alignItems="center" gap="15px">
      <Text>{userName}</Text>
      <Divider orientation="vertical" h="7" border="1px solid #9d9999" />
      <Link
        _hover={{ textDecor: 'none' }}
        fontFamily="-moz-initial"
        fontSize="14px"
        as={NavLink}
        to="/"
        pt="1"
        onClick={() => dispatch(authOperations.logOut())}
        style={getStyle}
      >
        EXIT
      </Link>
    </Flex>
  );
};

export default UserMenu;
