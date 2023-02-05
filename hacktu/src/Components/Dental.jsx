import React from "react";
import dental from "../imgs/dental.jpg";
import Treatmentcard from "./Treatmentcard.jsx";
import Doctorcard from "./Doctorcard";
import Treatment from "./Treatment.jsx";
import { Flex, Spacer, Heading, Text, Divider, Center } from "@chakra-ui/react";
import Comment from "./Comment";
import Denheading from "./Denheading";
import Denheading2 from "./Denheading2";
import Denheading3 from "./Denheading3";
export default function Dental() {
  return (
    <div>
      <Center>
        <img src={dental} />
      </Center>
      <br />
      <br />
      <br />
      <center>
        <Heading size={"lg"}>
          Find the right Doctor <Text color="purple.200">at right place</Text>
        </Heading>
        <br />
      </center>
      <br />
      <Denheading />
      <Flex>
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
      </Flex>
      <br />
      <Denheading2 />
      <Flex>
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
      </Flex>
      <br />
      <Denheading3 />
      <Flex>
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
      </Flex>
      <br />
      <br />
      <br />
      <Comment />
    </div>
  );
}
