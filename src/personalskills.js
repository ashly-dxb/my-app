import React, {Component} from 'react';

class PersonalSkills extends Component {
    render() {
      return (
              <div className="ContentData">
                    <h4>Personal Skills</h4>
                    
                    <div className="ContentInside">
                        <div className="row">
                          <div className="leftList">Team work</div>
                          <div className="rightList">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>

                        <div className="row">
                          <div className="leftList">Team management</div>
                          <div className="rightList">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>

                        <div className="row">
                          <div className="leftList">Analytical skills</div>
                          <div className="rightList">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>

                        <div className="row">
                          <div className="leftList">Creativity</div>
                          <div className="rightList">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>

                        <div className="row">
                          <div className="leftList">Staff training</div>
                          <div className="rightList">&#8226; &#8226; &#8226; &#8226; <span color="grey">&#8226;</span></div>
                        </div>

                        <div className="row">
                          <div className="leftList">Communication</div>
                          <div className="rightList">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>
                    </div>
              </div>
            );
    }
}
  
export default PersonalSkills;
