import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allSkills } from "../redux/action/action";
import SkillProgress from "./SkillProgress";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const dispatch = useDispatch();
  const skillsList = useSelector((state) => state.skills);
  
  useEffect(() => {
    dispatch(allSkills());
  }, [dispatch]);
  useEffect(() => {
    setSkills(skillsList);
  }, [skillsList]);
  return (
    <div className="skills py-5">
      <div className="container">
        <h4 className="text-white title">Skills</h4>
        <p className="line-height text-lighter my-2">
          As a front-end developer, I have honed a diverse set of skills that
          empower me to build engaging, user-friendly interfaces.<br/> Here’s a
          breakdown of my core competencies:
        </p>
        <hr style={{borderColor:"#fcfcfc5e"}}/>
        <div className="row">
          {skills.length >= 1 ? (
            skills.map((skill) => (
              <div className="col-lg-6 col-md-6 col-12" key={skill.id}>
                <div className="skill-wrapper">
                  <div className="d-flex justify-content-between">
                    <b className="text-lighter text-sm my-2 d-block">
                      {skill.skillName}
                    </b>
                    <span className="d-block text-lighter text-sm my-2">
                      {skill.skillCount}%
                    </span>
                  </div>
                  <div className="skill-progress my-2">
                    <SkillProgress progress={skill.skillCount} skillBgColor={skill.skillBgColor}/>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
