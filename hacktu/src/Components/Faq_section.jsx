import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { Text } from "@chakra-ui/react";
import { Center, Square, Circle } from "@chakra-ui/react";

const data = {
  rows: [
    {
      title: "How Much Should I Budget for My Medical Tourism Trip?",
      content: `Your particular lifestyle, the medical tourism destination, and the type of medical tourism procedure you will be undergoing will dictate, to a large degree, how much money you will be spending. In general, the farther away your medical tourism destination the more you will pay for airfare. So, for example, expect to pay more if you are flying from Dallas to Bangkok, Thailand, than you would for a flight to Monterey, Mexico. At the same time, you also need to take into account that some medical tourism destinations are more expensive than others. So even if a particular country is cheaper to travel to, you will need to factor in the relative cost of “living,” in comparison to another medical tourism destination.
      `,
    },
    {
      title:
        "What about your lifestyle preferences? Do you plan to stay at a five-star hotel or are you comfortable “roughing” it at a local bed and breakfast? ",
      content:
        "Some adventurous souls prefer to immerse themselves in the local culture and will literally live on a shoestring budget. Most everyone else though will tend to fall somewhere between the Holiday Inn and Club Med. The type of medical tourism procedure or medical tourism treatment you are undergoing will also play a large part in your decision of where to stay and what you will do. A medical tourism patient undergoing open heart surgery or a knee replacement will require extra care and very comfortable conditions after leaving the hospital. Not the case for someone coming for a dental bridge or an eyelid lift. Wherever you decide to stay, make sure it serves your needs as a medical tourism patient.Many of the expenses of a medical tourism trip will be the same as those of a “normal” trip or vacation. At the very minimum you will need to budget for airfare, hotel accommodations, transportation requirements and meals. Sightseeing tours and souvenirs are also a real possibility, particularly if you are traveling with a companion.",
    },
    {
      title: "What is a Medical Tourism Facilitator?",
      content: `Sometimes referred to as medical tourism agencies, or a medical travel facilitator, these are companies that, as their name suggests, act as facilitators or intermediaries for patients seeking treatments in other countries or regions.

      ‍
      
      Medical Tourism Facilitators have played an important role in promoting the growth of medical tourism, and for many medical tourism patients, represent their first face to face contact with the concept of medical tourism.
      
      ‍
      
      Over the last 10-15 years, thousands of these companies have popped up, most sporting names synonymous with health and travel. They function much like a travel agency, requesting and obtaining passports, booking flights, and arranging a medical tourism patient’s lodging, transportation and tours. The key difference, of course, is that they also serve as the liaison or mediator between you and the international hospital and doctor. In effect, it is the facilitator’s job to repackage the medical provider’s service offering, make it more appealing, and then guide you along the medical tourism process. `,
    },
    {
      title: "What is a Familiarization Tour?",
      content:
        "In medical tourism, a Familiarization Tour or Fam Trip is a trip organized by a public or private entity seeking to showcase the healthcare and tourism assets in a certain region, country or city, in order to attract new business (usually in the form of patients). Fam trips are often organized by the tourism board, medical tourism cluster, or by a Destination Management Organization (DMO) representing a destination. Participants in the Fam trip are typically buyers of medical tourism services such as foreign governments, insurance companies, employers and medical tourism facilitators. They are vetted in advance and usually have all their travel, accommodation and maintenance fees covered during the trip.",
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "blue",
  rowTitleColor: "blue",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  // animate: true,
  // arrowIcon: "V",
  // tabFocus: true
};

// export default function Faq_section() {
//   return (
//     <div>
//       <Faq data={data} styles={styles} config={config} />
//     </div>
//   );
// }

export default function Faq_section() {
  const [rows, setRowsOption] = useState(null);

  useEffect(() => {
    if (rows) {
      setTimeout(() => {
        rows[0].expand();
      }, 2500);

      setTimeout(() => {
        rows[0].close();
      }, 5000);

      setTimeout(() => {
        rows[0].scrollIntoView();
        // rows[0].scrollIntoView(true);
      }, 10000);
    }
  }, [rows]);

  return (
    <div style={{ paddingTop: "50px", margin: "50px" }}>
      <center>
        {/* <h2 className="section-title">More Information</h2> */}
      </center>
      <Text fontSize="32px" color="teal" fontSize="5xl" fontWeight="bold">
        Frequently Asked Questions (Faqs)
      </Text>
      <div className="faq-style-wrapper">
        <Text>
          <Faq data={data} getRowOptions={setRowsOption} />
        </Text>
      </div>
    </div>
  );
}
