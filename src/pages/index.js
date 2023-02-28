import Head from "next/head";
// import Image from "next/image";
import {
  Box,
  Center,
  Heading,
  Text,
  Flex,
  Button,
  Spacer,
  Image
} from "@chakra-ui/react";
import FullBodyHealthCheckups from "@/components/FullBodyHealthCheckups";
import ShopByHealthConcerns from "@/components/ShopByHealthConcerns";
import { Profile } from "./profile";

import FeatureBrands from "@/components/FeatureBrands";
import PopularCategories from "@/components/PopularCategories";
import HomeSlider from "@/components/HomeSlider";
import PathologyTests from "./../components/PathologyTests";
import PopularCombo from "@/components/PopularCombo";
import SugarSubtitutes from "@/components/SugarSubtitutes";
import MainNavbar from "@/components/navbar/MainNavbar/MainNavbar";
import Footer from "@/components/footer";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Health Prime</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />
      <Box bgColor={'#f6f6f6'}>
        <Flex bgColor={'white'} w={"100%"} >
          <HomeSlider />
          <Image
            display={{ base: 'none', lg: 'none', xl: 'block' }}
            src={
              "https://onemg.gumlet.io/a_ignore,w_480,h_200,c_fit,q_auto,f_auto/1caa64c3-60f0-4c9d-ab85-4fc9a49769c3.png"
            }
            height={"212px"}
            width={"30%"}
            alt="caruausal"
          />
        </Flex>

        <Box align="center" p="20px" gap="100px" bgColor={'white'}>
          <Text fontSize="2xl" color="grey">
            Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform
          </Text>
        </Box>
        <Center mb={'50px'}>
          <Image
            src={
              "https://onemg.gumlet.io/marketing/29087450-0f25-4856-96fc-62f4ea81bbd3.png"
            }

            height={{
              base: "100px",
              md: "130px",
              lg: '150px'
            }}
            width={"100%"}
            alt="caruausal"
          />
        </Center>
        <Flex w="80%" m="auto">
          <Text>Shop by health concerns</Text>
          <Spacer />
          <Button
            bg="#ff6f61"
            color="white"
            size="xs"
            _hover={{
              bg: "#fd7c70",
            }}
            onClick={() => router.push('/products')}
          >
            SEE ALL
          </Button>
        </Flex>

        <ShopByHealthConcerns />
        <Flex w="80%" m="auto">
          <Text>Featured brands</Text>
          <Spacer />
          <Button
            bg="#ff6f61"
            color="white"
            size="xs"
            _hover={{
              bg: "#fd7c70",
            }}
            onClick={() => router.push('/products')}
          >
            SEE ALL
          </Button>
        </Flex>
        <FeatureBrands />
        <Flex w="80%" m="auto">
          <Text>Full body health checkups</Text>
          <Spacer />
          <Button
            bg="#ff6f61"
            color="white"
            size="xs"
            _hover={{
              bg: "#fd7c70",
            }}
            onClick={() => router.push('/products')}
          >
            SEE ALL
          </Button>
        </Flex>

        <FullBodyHealthCheckups />

        <Flex w="80%" m="auto">
          <Text>Pathology Tests | Up to 70% off</Text>
          <Spacer />
          <Button
            bg="#ff6f61"
            color="white"
            size="xs"
            _hover={{
              bg: "#fd7c70",
            }}
            onClick={() => router.push('/products')}
          >
            SEE ALL
          </Button>
        </Flex>

        <PathologyTests />
        <Flex w="80%" m="auto">
          <Text>Popular categories</Text>
          <Spacer />
          <Button
            bg="#ff6f61"
            color="white"
            size="xs"
            _hover={{
              bg: "#fd7c70",
            }}
            onClick={() => router.push('/products')}
          >
            SEE ALL
          </Button>
        </Flex>

        <PopularCategories />
        <Flex w="80%" m="auto">
          <Text>Popular Combo Deals</Text>
          <Spacer />
          <Button
            bg="#ff6f61"
            color="white"
            size="xs"
            _hover={{
              bg: "#fd7c70",
            }}
            onClick={() => router.push('/products')}
          >
            SEE ALL
          </Button>
        </Flex>

        <PopularCombo />
        <Flex w="80%" m="auto">
          <Text>Sugar substitutes</Text>
          <Spacer />
          <Button
            bg="#ff6f61"
            color="white"
            size="xs"
            _hover={{
              bg: "#fd7c70",
            }}
            onClick={() => router.push('/products')}
          >
            SEE ALL
          </Button>
        </Flex>

        <SugarSubtitutes />
      </Box>
      <Footer />
    </>
  );
}
