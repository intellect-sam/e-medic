import React, { Fragment } from "react";
import {
  AboutOverview,
  AboutStory,
  AboutMission,
  AboutVision,
  AboutValues,
} from "../components";

const About: React.FC = () => {
  return (
    <Fragment>
      <AboutOverview />
      <AboutStory />
      <AboutValues />
      <AboutMission />
      <AboutVision />
    </Fragment>
  );
};

export default About;
