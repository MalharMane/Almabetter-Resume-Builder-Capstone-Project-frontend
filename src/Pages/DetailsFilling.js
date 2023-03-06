import React, { useState } from "react";
import Navbar from "../Components/Common/Navbar";
import DetailFillingSidebar from "../Components/DetailFillingSidebar";
import EducationComponent from "../Components/EducationComponent";
import KeySkillsComponent from "../Components/KeySkillsComponent";
import PersonalInfoComponent from "../Components/PersonalInfoComponent";
import PreviewComponent from "../Components/PreviewComponent";
import WorkExperienceComponent from "../Components/WorkExperienceComponent";
import "../Styles/DetailsFilling.css";

const DetailsFilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <DetailFillingSidebar tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalInfoComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <KeySkillsComponent setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <WorkExperienceComponent setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <EducationComponent setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <PreviewComponent setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default DetailsFilling;
