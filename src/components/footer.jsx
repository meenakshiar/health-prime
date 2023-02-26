import React from "react";
import {
  Stack,
  Box,
  Divider,
  Heading,
  Text,
  Flex,
  Input,
  Button,
  Center,
  Grid,
  GridItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import Image from "next/image";
const Footer = () => {
  return (
    <Stack bg="#fff" m="auto" w="100%" mt="10">
      <Box m="auto" w="95%" p={10}>
        <Heading as="h2" size="lg" mb={"30px"}>
          Stay Healthy with Tata 1mg: Your Favourite Online Pharmacy and
          Healthcare Platform
        </Heading>
        <Text as="b" size="md" mb={"20px"}>
          We Bring Care to Health.
        </Text>
        <Text mb={"10px"} color={"gray"}>
          Tata 1mg is {"India's"} leading digital healthcare platform. From
          doctor consultations on chat to online pharmacy and lab tests at home:
          we have it all covered for you. Having delivered over 25 million
          orders in 1000+ cities till date, we are on a mission to bring{" "}
          {"care"} to
          {"health"} to give you a flawless healthcare experience.
        </Text>

        <Text as="b" size="md" mt={"20px"}>
          Tata 1mg: Your Favourite Online Pharmacy!
        </Text>
        <Text mb={"10px"} color={"gray"}>
          Tata 1mg is {"India's "}leading online chemist with over 2 lakh
          medicines available at the best prices. We are your one-stop
          destination for other healthcare products as well, such as over the
          counter pharmaceuticals, healthcare devices and homeopathy and
          ayurveda medicines.
        </Text>
        <Text mb={"10px"} color={"gray"}>
          With Tata 1mg, you can buy medicines online and get them delivered at
          your doorstep anywhere in India! But, is ordering medicines online a
          difficult process? Not at all! Simply search for the products you want
          to buy, add to cart and checkout. Now all you need to do is sit back
          as we get your order delivered to you.
        </Text>
        <Text mb={"10px"} color={"gray"}>
          In case you need assistance, just give us a call and we will help you
          complete your order.
        </Text>
        <Text mb={"10px"} color={"gray"}>
          And there is more! At Tata 1mg, you can buy health products and
          medicines online at best discounts.
        </Text>
        <Text mb={"10px"} color={"gray"}>
          Now, {"isn't"} that easy? Why go all the way to the medicine store and
          wait in line, when you have Tata 1mg Pharmacy at your service.
        </Text>
        <Text as="b" size="md" mb={"30px"}>
          The Feathers in Our Cap
        </Text>
        <Text mb={"10px"} color={"gray"}>
          At Tata 1mg, our goal is to make healthcare understandable, accessible
          and affordable in India. We set out on our journey in 2015, and have
          come a long way since then. Along the way, we have been conferred with
          prestigious titles like BML Munjal Award {"for 'Business"} Excellence
          through Learning and {"Development',"} Best Online Pharmacy in India
          Award and Top 50 venture in The Smart CEO-Startup50 India. We have
          been selected as the only company from across the globe for SD#3{" "}
          {"Health"} & Well Being for {"all"} by Unreasonable group, US State
          Department. In 2019 alone we received three awards including the BMW
          Simply Unstoppable Award.
        </Text>
        <Text as="b" size="md" mb={"30px"}>
          The Services We Offer
        </Text>
        <Text mb={"10px"} color={"gray"}>
          Tata 1mg is {"India's"} leading digital healthcare platform, where you
          can buy medicines online with discount. Buy medicine online in Delhi,
          Mumbai, Bangalore, Hyderabad, Pune, Gurgaon, Noida, Kolkata, Chennai,
          Ahmedabad, Lucknow and around a 1000 more cities. Besides delivering
          your online medicine order at your doorstep, we provide accurate,
          authoritative & trustworthy information on medicines and help people
          use their medicines effectively and safely.
        </Text>
        <Text mb={"10px"} color={"gray"}>
          We also facilitate lab tests at home. You can avail over 2,000 tests
          and get tested by 120+ top and verified labs at the best prices. Need
          to consult a doctor? On our platform, you can talk to over 20 kinds of
          specialists in just a few clicks.
        </Text>
        <Text mb={"10px"} color={"gray"}>
          Customer centricity is the core of our values. Our team of highly
          trained and experienced doctors, phlebotomists and pharmacists looks
          into each order to give you a fulfilling experience.
        </Text>
        <Text mb={"10px"} color={"gray"}>
          We’ve made healthcare accessible to millions by giving them quality
          care at affordable prices. Customer centricity is the core of our
          values. Our team of highly trained and experienced doctors,
          phlebotomists and pharmacists looks into each order to give you a
          fulfilling experience.
        </Text>
        <Text mb={"10px"} color={"gray"}>
          Visit our online medical store now, and avail online medicine purchase
          at a discount. Stay Healthy!
        </Text>
      </Box>
      <Box p={10}>
        <Text align="center">INDIA’S LARGEST HEALTHCARE PLATFORM</Text>
        <Flex justifyContent="space-evenly">
          <Box align="center">
            <Text as="b" fontSize="3xl">
              260m+
            </Text>
            <Text>Visitors</Text>
          </Box>
          <Box align="center">
            <Text as="b" fontSize="3xl">
              31m+
            </Text>
            <Text>Orders Delivered</Text>
          </Box>
          <Box align="center">
            <Text as="b" fontSize="3xl">
              1800+
            </Text>
            <Text>Cities</Text>
          </Box>
        </Flex>
        <Divider h="2px" />
      </Box>
      <Box p={5}>
        <Center gap="10px">
          <Text>Get the link to download App</Text>
          <Input placeholder="Enter Phone Number" variant="filled" w="400px" />
          <Button color="white" bg="#ff6f61">
            Send Link
          </Button>
        </Center>
      </Box>
      <Box p={10} bg="#fffcf8" w="100%" m="auto" mt="10">
        <Grid templateColumns="repeat(5, 1fr)" gap={6} ml="10" color={"gray"}>
          <GridItem p="5px" color={"gray"}>
            <Text fontSize="lg" as={"b"} color={"black"}>
              Know Us
            </Text>
            <Text fontSize="sm">About Us</Text>
            <Text fontSize="sm">Contact Us</Text>
            <Text fontSize="sm">Press Coverage</Text>
            <Text fontSize="sm">Careers</Text>
            <Text fontSize="sm">Business Partnership</Text>
            <Text fontSize="sm">Become a Health</Text>
            <Text fontSize="sm">Partner</Text>
            <Text fontSize="sm">Corporate</Text>
            <Text fontSize="sm">Governance</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" as={"b"} color={"black"}>
              Our Policies
            </Text>
            <Text fontSize="sm">Privacy Policy</Text>
            <Text fontSize="sm">Terms and Conditions</Text>
            <Text fontSize="sm">Editorial Policy</Text>
            <Text fontSize="sm">Return Policy</Text>
            <Text fontSize="sm">IP Policy</Text>
            <Text fontSize="sm">Grievance Redressal Policy</Text>
            <Text fontSize="sm">Fake Jobs and Fraud</Text>
            <Text fontSize="sm">Disclaimer</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" as={"b"} color={"black"}>
              Our Services
            </Text>
            <Text fontSize="sm">Order</Text>
            <Text fontSize="sm">Order</Text>
            <Text fontSize="sm">Book Lab test</Text>
            <Text fontSize="sm">Consult a Doctor</Text>
            <Text fontSize="sm">Ayurveda</Text>
            <Text fontSize="sm">Articles</Text>
            <Text fontSize="sm">Hindi Articles</Text>
            <Text fontSize="sm">Care Plan</Text>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" as={"b"} color={"black"}>
              Connect
            </Text>
            <Text>Social Links</Text>
            <Flex w="250px" gap="5px">
              <Image
                src="https://onemg.gumlet.io/vqpr5zx9ofpsyafjwwin.svg"
                alt="fb"
                width="30"
                height="30"
              />
              <Image
                src="https://onemg.gumlet.io/wwynoy59i3iakt8te5xl.svg"
                alt="fb"
                width="30"
                height="30"
              />
              <Image
                src="https://onemg.gumlet.io/cwrpdmlzckwzvv9e1gjv.svg"
                alt="fb"
                width="30"
                height="30"
              />
              <Image
                src="https://onemg.gumlet.io/tywtfwyzxb8ujnqmbuau.svg"
                alt="fb"
                width="30"
                height="30"
              />
              <Image
                src="https://onemg.gumlet.io/hqfglkzkfxaxaypniixn.svg"
                alt="fb"
                width="30"
                height="30"
              />
            </Flex>
            <Text>Want daily dose of health?</Text>
            <Button color="white" bg="#ff6f61">
              Sign Up
            </Button>
          </GridItem>
          <GridItem>
            <Text fontSize="lg" as={"b"} color={"black"}>
              Download App
            </Text>
            {/* <Image
              src="https://e7.pngegg.com/pngimages/598/19/png-clipart-google-play-and-app-store-logos-app-store-google-play-apple-apple-text-logo.png"
              alt="google"
              width="250"
              height="250"
            /> */}
            {/* <Image src="" alt="apple" /> */}
          </GridItem>
        </Grid>
        <Divider h="2px" />
        <Box w="90%" m="auto" mt="10" mb="10">
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem>
              <Flex>
                <Image
                  src="https://onemg.gumlet.io/secure-rebrand_x6f8yq.svg"
                  alt="fb"
                  width="100"
                  height="100"
                />
                <Box>
                  <Text as="b" fontSize="xl">
                    Reliable
                  </Text>
                  <Text color="grey" fontSize="sm">
                    All products displayed on Tata 1mg are procured from
                    verified and licensed pharmacies. All labs listed on the
                    platform are accredited
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex>
                <Image
                  src="https://onemg.gumlet.io/reliable-rebrand_rcpof3.svg"
                  alt="fb"
                  width="100"
                  height="100"
                />
                <Box>
                  <Text as="b" fontSize="xl">
                    Secure
                  </Text>
                  <Text color="grey" fontSize="sm">
                    Tata 1mg uses Secure Sockets Layer (SSL) 128-bit encryption
                    and is Payment Card Industry Data Security Standard (PCI
                    DSS) compliant
                  </Text>
                </Box>
              </Flex>
            </GridItem>
            <GridItem>
              <Flex>
                <Image
                  src="https://onemg.gumlet.io/affordable-rebrand_ivgidq.svg"
                  alt="fb"
                  width="100"
                  height="100"
                />
                <Box>
                  <Text as="b" fontSize="xl">
                    Affordable
                  </Text>
                  <Text color="grey" fontSize="sm">
                    Find affordable medicine substitutes, save up to 50% on
                    health products, up to 80% off on lab tests and free doctor
                    consultations.
                  </Text>
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
        <Divider h="2px" />
        <Box align="center">
          <Image
            src="https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png"
            alt="logo1"
            width="100"
            height="100"
          />
          <Text as="b" fontSize="xl">
            {"India's"} only LegitScript and ISO/ IEC 27001 certified online
            healthcare platform
          </Text>
        </Box>
        <Box>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Know more about Tata 1mg
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {/* 1 */}
                <Text as="b">Access medical and health information</Text>
                <Text>
                  Tata 1mg provides you with medical information which is
                  curated, written and verified by experts, accurate and
                  trustworthy. Our experts create high-quality content about
                  medicines, diseases, lab investigations, Over-The-Counter
                  (OTC) health products, Ayurvedic herbs/ingredients, and
                  alternative remedies.
                </Text>
                {/* 2 */}
                <Text as="b">Order medicines online</Text>
                <Text>
                  Get free medicine home delivery in over 1800 cities across
                  India. You can also order Ayurvedic, Homeopathic and other
                  Over-The-Counter (OTC) health products. Your safety is our top
                  priority. All products displayed on Tata 1mg are procured from
                  verified and licensed pharmacies.
                </Text>
                {/* 3 */}
                <Text as="b">Book lab tests</Text>
                <Text>
                  Book any lab tests and preventive health packages from
                  certified labs and get tested from the comfort of your home.
                  Enjoy free home sample collection, view reports online and
                  consult a doctor online for free.
                </Text>
                {/* 4 */}
                <Text as="b">Consult a doctor online</Text>
                <Text>
                  Got a health query? Consult doctors online from the comfort of
                  your home for free. Chat privately with our registered medical
                  specialists to connect directly with verified doctors. Your
                  privacy is guaranteed.
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box>
          <Text color="grey" as="b" fontSize="sm">
            © 2023 Tata 1mg. All rights reserved. In compliance with Drugs and
            Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945, we{" "}
            {"don't"}
            process requests for Schedule X and other habit forming drugs.
          </Text>
        </Box>
      </Box>
    </Stack>
  );
};

export default Footer;
