import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { hackathon } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EventCard = ({ event, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-row mb-8 ${isEven ? "flex-row-reverse" : ""}`}>
      <div className="flex-none w-1/4">
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={event.icon}
            alt={event.company_name}
            className="w-36 h-36 object-contain"
          />
        </div>
      </div>
      <div className="flex-auto ml-4">
        <h3 className="text-white text-lg font-bold mb-2">
          {event.title}
        </h3>
        <p className="text-secondary text-base font-semibold mb-2">
          {event.organizer_name}
        </p>
        <p className="text-secondary text-base font-semibold mb-2">
          {event.date}
        </p>
        <ul className="list-disc ml-5 space-y-2">
          {event.points.map((point, index) => (
            <li
              key={`event-point-${index}`}
              className="text-white-100 text-sm tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Event = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Past
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Events
        </h2>
      </motion.div>

      <div className="mt-20">
        {hackathon.map((event, index) => (
          <EventCard
            key={`event-${index}`}
            event={event}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Event, "event");
