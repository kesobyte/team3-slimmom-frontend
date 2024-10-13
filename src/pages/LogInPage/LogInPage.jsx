import {useFormik} from "formik";
import {
  Box,
  Button,
  Flex,
  Heading,
  VStack
} from "@chakra-ui/react";
import InputField from "../../components/InputField/InputField";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import authOperations from "../../redux/auth/authOperations";
import {customColors} from "../../theme/colors";
import {BgImg} from "./LogIn.styled";

export function LogInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(authOperations.logIn(values))
    }
  });
  return (
    <>
      <BgImg/>
      <Flex
        w={{xs: '100%', md: 'auto'}}
        justify="flex-start"
        alignItems={{xs: 'flex-start', lg: 'center'}}
        flexGrow='1' h='100vh'
        pt={{md: '120px'}}
        pb={{lg: '25px'}}
      >
        <Box
          py='98px' flexGrow='1'
          pt={{xs: '117px'}}
        >
          <Heading
            as='h1' size='xs' mb='34px'
            w={{xs: '100%', md: 'auto'}}
            textAlign={{xs: 'center', md: 'left'}}
            color={customColors.sun["100"]}
            textTransform='uppercase'
          >Sign In</Heading>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <VStack spacing={5} align="flex-start" mb={{xs: '60px', lg: '60px'}}>
              <Box w={{xs: '100%', md: '240px'}}>
                <InputField
                  autoComplete="off"
                  labelName="Email&nbsp;*"
                  type="text"
                  name="email"
                  handlerEvent={formik.handleChange}
                  value={formik.values.email}
                  required
                  width='100%'
                />
              </Box>
              <Box w={{xs: '100%', md: '240px'}}>
                <InputField
                  autoComplete="off"
                  labelName="Password&nbsp;*"
                  type="password"
                  name="password"
                  handlerEvent={formik.handleChange}
                  value={formik.values.password}
                  required
                  width='100%'
                />
              </Box>
            </VStack>
            <Flex
              gap={6}
              flexDirection={{xs: 'column', md: 'row'}}
              alignItems={{xs: 'center'}}
            >
              <Button variant={'primary'} type="submit">Login</Button>
              <Button variant={'outline'} type="button" onClick={() => navigate('/registration')}>Register</Button>
            </Flex>
          </form>
        </Box>
      </Flex>
    </>
  );
}
