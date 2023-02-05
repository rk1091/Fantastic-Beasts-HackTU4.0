import { ReactNode } from "react";

import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}>
          <Stack spacing={6}>
            <h1>
              <bold>HealthHorizons</bold>
            </h1>
            <Text fontSize={"sm"}>© 2023 All rights reserved</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader></ListHeader>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader></ListHeader>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
            <Link href={"#"}></Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About</ListHeader>
            <Link href={"#"}>For Customers</Link>
            <Link href={"#"}>Information</Link>
            <Link href={"#"}>For Doctors</Link>
            <Link href={"#"}>About us</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"https://www.facebook.com/"}>Facebook</Link>
            <Link href={"https://www.twitter.com/"}>Twitter</Link>
            <Link href={"https://www.instagram.com/"}>Instagram</Link>
            <Link href={"https://www.linkedin.com/"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
