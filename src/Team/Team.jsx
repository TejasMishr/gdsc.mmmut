import React from "react";
import Footer from "../../components/Footer";
import "../Team/Team.css";
import MembersData from "../Team/Team_data/MembersData";
import Team_Members from "./components/Team_Members";

export default function Team() {
  const team = (member, index) => {
    return (
      //team structure
      <Team_Members
        img={member.img}
        name={member.memberName}
        profession={member.profession}
        FbLink={member.FbLink}
        TwitterLink={member.TwitterLink}
        InstaLink={member.InstaLink}
        GithubLink={member.GithubLink}
        LinkedinLink={member.LinkedinLink}
      />
    );
  };

  return (
    <>
      <div id="egg">
        <div className="container contact_container" id="star-five ">
          <h2 className="text-center custom_heading">Our Team</h2>
          <div className="border_animation"></div>
          <p className="text-center">
            Crafted by the Learners, Tailored for the Explorers
          </p>

          {/* // render team mem, details // */}
          <div className="container">
            <div className="row justify-content-center custom_member">
              {MembersData.map(team)}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
