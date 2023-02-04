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
              <bold>TheMedTraveller</bold>
            </h1>
            <Text fontSize={"sm"}>© 2023 All rights reserved</Text>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>About</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
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
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
