import React from "react";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills_title">
        <h1>Skills</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          incidunt voluptas ad! Repellat nemo omnis quae distinctio veniam
          consequatur vel.
        </p>
      </div>
      <div className="skills_container">
        <div className="skill-group">
          <p>HTML, CSS and Web Design</p>
          <div className="skill-bar">
            <div className="skill-value html">90%</div>
          </div>
          <p>Javascript</p>
          <div className="skill-bar">
            <div className="skill-value js">70%</div>
          </div>
          <p>Python</p>
          <div className="skill-bar">
            <div className="skill-value python">55%</div>
          </div>
          <p>VBA</p>
          <div className="skill-bar">
            <div className="skill-value vba">70%</div>
          </div>
          <p>Office Apps</p>
          <div className="skill-bar">
            <div className="skill-value office">70%</div>
          </div>
          <p>Adobe Acrobat Pro</p>
          <div className="skill-bar">
            <div className="skill-value acrobat">60%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
