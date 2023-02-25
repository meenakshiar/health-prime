import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import SignUpCarousel from './SignUpCarousel';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from 'config/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { userRegister } from '@/redux/auth/action';


export default function SignUpCard() {
  const {isAuth, userName} = useSelector(state => state.authReducer)
  const dispatch = useDispatch();
console.log(isAuth,userName)
  const[name,setName] = useState("")
    const[registerEmail,setRegisterEmail] = useState("");
    const[registerPass, setRegisterPass] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const handleSignUp = async() => {
      try{
        const res = await createUserWithEmailAndPassword(auth,registerEmail,registerPass);
        const user = await res.user; 
        await updateProfile((user), {
            displayName: name
        });
    
        dispatch(userRegister(user.displayName))
    }
    catch(error){
        console.log(error.message)
    }            

    }
  return (
    <Flex
      minH={'60vh'}
      maxW={"60vw"}
      align={'center'}
      justify={'center'}
      flexDirection={{base:"column", md:"row", lg:"row"}}
      // border="2px solid tomato"
      margin="auto"
      mt="10vh"
      borderRadius="15px"
      >
        <SignUpCarousel />
      <Stack spacing={8} mx={'auto'} w={{base:"100%", md:"50%", lg:"50%"}} py={12} px={6}>
       
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
              <Box>
                <Center>

                <Heading>Sign up</Heading>
                </Center>
              </Box>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" onChange={(e) => setName(e.target.value)}/>
                </FormControl>
              </Box>
              
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setRegisterEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} onChange={(e) => setRegisterPass(e.target.value)}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'red.400'}
                color={'white'}
                _hover={{
                  bg: 'red',
                }}
                onClick={handleSignUp}
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}