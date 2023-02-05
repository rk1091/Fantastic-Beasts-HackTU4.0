import { ReactNode } from "react";
import S from "../imgs/cos.jpg";
import D from "../imgs/D.jpg";
import H from "../imgs/hair.jpg";
import we from "../imgs/wellness.jpg";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import Treatmentcard from "./Treatmentcard";
import { Center, Square, Circle } from "@chakra-ui/react";

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}>
      {children}
    </Text>
  );
};

export default function Treatment() {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={20}>
        <Stack spacing={0} align={"center"}>
          <Heading>
            <bold>Treatment offers</bold>
          </Heading>
          <Text>Compare prices and find exclusive packages</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          {/* <Treatmentcard />
          <Treatmentcard />
          <Treatmentcard />
          <Treatmentcard /> */}

          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Dental Work</TestimonialHeading>
              <TestimonialText>
                All kinds of affordable dental treatments
              </TestimonialText>
              <Link href="/dental">Click here</Link>
            </TestimonialContent>

            <br></br>
            <center>
              <img
                src={D}
                style={{
                  resizeMode: "cover",
                  height: 150,
                  width: 150,
                }}
              />
            </center>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Cosmetic treatment</TestimonialHeading>
              <TestimonialText>
                Advanced cosmetic treatments at world class hospitals
              </TestimonialText>
              <Link href="/register">Click here</Link>
            </TestimonialContent>

            <br></br>
            <center>
              <img
                src={H}
                style={{
                  resizeMode: "cover",
                  height: 150,
                  width: 150,
                }}
              />
            </center>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Hair Transplant</TestimonialHeading>
              <TestimonialText>
                Quality hair transplant by India's top surgeons
              </TestimonialText>
              <Link href="/register">Click here</Link>
            </TestimonialContent>

            <br></br>
            <center>
              <img
                src={S}
                style={{
                  resizeMode: "cover",
                  height: 150,
                  width: 150,
                }}
              />
            </center>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Wellness services</TestimonialHeading>
              <TestimonialText>
                The best spas, yoga retreats and meditation centres
              </TestimonialText>
              <Link href="/register">Click here</Link>
            </TestimonialContent>
            <br></br>
            <center>
              <img
                src={we}
                style={{
                  resizeMode: "cover",
                  height: 150,
                  width: 150,
                }}
              />
            </center>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
