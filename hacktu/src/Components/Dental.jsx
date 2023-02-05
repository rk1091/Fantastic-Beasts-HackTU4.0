import React from "react";
import dental from "../imgs/dental.jpg";
import Treatmentcard from "./Treatmentcard.jsx";
import Doctorcard from "./Doctorcard";
import Treatment from "./Treatment.jsx";
import { Flex, Spacer } from "@chakra-ui/react";
import Comment from "./Comment";

export default function Dental() {
  return (
    <div>
      <img src={dental} />
      <h1>hi</h1>
      <Flex>
        <Treatmentcard />
        <Treatmentcard />
        <Treatmentcard />

        <Treatmentcard />
      </Flex>
      <Flex>
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
        <Doctorcard />
      </Flex>
      <Comment />
    </div>
  );
}
