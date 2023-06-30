import React, {Component} from 'react';

class WorkExperience extends Component {
    render() {
      return (
        <div className="ContentData">
          <h3>Work Experience</h3>

          <div className="ContentInside">
            <h4 className="colorH4">Senior Software Engineer | Jan 2022 - Jan 2023</h4>
            <h5>Nexsys-One, DMCC, Dubai</h5>

            <div>&#160;</div>

            Responsibilities includes:
            <ul>
              <li>Conduct day-to-day work coordination with team members and project management.</li>
              <li>Develop, test, deploy and maintain web applications.</li>
              <li>Translate requirements into polished, high-level designs.</li>
              <li>Presentation of the developed modules and designs to customers.</li>
              <li>Ensure the coding standards and coding guidelines are in place.</li>
              <li>Manage complex requirements from design until deployment.</li>
            </ul>
          </div>

          <div className="ContentInside">
            <h4 className="colorH4">Technical Architect | May 2004 - Sep 2021</h4>
            <h5>Lisec Automation Middle East FZ LLC, Dubai</h5>

            <div>&#160;</div>

            Responsibilities includes:
            <ul>
              <li>Conduct day-to-day work coordination with team members and project management.</li>
              <li>Develop, test, deploy and maintain web applications.</li>
              <li>Translate requirements into polished, high-level designs.</li>
              <li>Conduct code reviews and ensure the coding standards and coding guidelines are in place.</li>
              <li>Manage complex projects from design until deployment.</li>
            </ul>
          </div>
        </div>
      );
    }
}
  
export default WorkExperience;
