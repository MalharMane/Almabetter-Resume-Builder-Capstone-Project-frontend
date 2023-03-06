import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template2.css";
import TemplateHeader from "../Components/TemplateHeader";
import TemplateHeading from "../Components/TemplateHeading";
import { data } from "../Data/data";
import TemplateOneExperienceComponent from "../Components/TemplateOneExperienceComponent";
import TemplateEducationComponent from "../Components/TemplateEducationComponent";
import TemplateKeySkillComponent from "../Components/TemplateKeySkillComponent";

const Template2 = (props) => {
  // console.log(
  //   props.personalinfo,
  //   props.workexperience,
  //   props.educationinfo,
  //   props.skills
  // );
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <TemplateHeader
        primaryColor={"white"}
        secondaryColor={"white"}
        bgColor={"#9B536F"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TemplateHeading color={"#9B536F"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <TemplateOneExperienceComponent
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TemplateHeading color={"#9B536F"} title={"Education"} />
        <TemplateEducationComponent education={educationinfo} />
        <TemplateHeading color={"#9B536F"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkillComponent key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template2;
