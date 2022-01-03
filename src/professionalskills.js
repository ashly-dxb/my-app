import React, {Component} from 'react';

class ProfessionalSkills extends Component {
    render() {
      return (
              <div className="ContentData">
                    <h3>Professional Skills</h3>
                    
                    <div className="ContentInside">                    
                        <li className="leftList">ReactJS, Redux, Flux</li>
                        <li className="leftList">JavaScript, EcmaScript6</li>
                        <li className="leftList">HTML5, CSS3, SASS</li>
                        <li className="leftList">PHP 7, NodeJS, Python</li>
                        <li className="leftList">Oracle, PostgreSQL, MySQL, MongoDB</li>
                        <li className="leftList">AJAX, RESTful API, SOAP</li>
                        <li className="leftList">JSON, XML</li>
                        <li className="leftList">GitLab, SVN / Jenkins, Nexus, NPM</li>
                        <li className="leftList">Apache, IIS, Nginx</li>
                    </div>
              </div>
            );
    }
}
  
export default ProfessionalSkills;
