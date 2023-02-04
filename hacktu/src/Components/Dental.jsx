import React from "react";
import dental from "../imgs/dental.jpg";
import Treatmentcard from "./Treatmentcard.jsx";
import Treatment from "./Treatment.jsx";
import { Flex, Spacer } from "@chakra-ui/react";

export default function Dental() {
  return (
    <div>
      <img src={dental} />
      <h1>hi</h1>
      <Flex>
        <Treatmentcard />
        <Spacer />
        <Treatmentcard />
        <Treatmentcard />

        <Treatmentcard />
      </Flex>
    </div>
  );
}
