import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { academics } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const AcademicsCard = ({ academic }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={academic.date}
      iconStyle={{ background: academic.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={academic.icon}
            alt={academic.school_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{academic.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {academic.school_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {academic.points.map((point, index) => (
          <li
            key={`academic-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Academics = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Academic..!!!
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {academics.map((academic, index) => (
            <AcademicsCard
              key={`academic-${index}`}
              academic={academic}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Academics, "academics");
