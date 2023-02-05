import { Box, Text, Link, VStack, Code, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Treatment from "./Treatment";
import main from "../imgs/main.jpg";
import Faq_section from "./Faq_section";
import Footer from "./Footer";
import SimpleSlider from "./Hospital.jsx";
// import Card from "./Card";
export default function Home() {
  return (
    <div>
      <div>
        {" "}
        <center>
          <img src={main} />
        </center>
      </div>
      <Treatment />
      <SimpleSlider />
      <Faq_section />
      <Footer />
    </div>
  );
}
