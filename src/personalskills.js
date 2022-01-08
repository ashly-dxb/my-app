import React, {Component} from 'react';

class PersonalSkills extends Component {
    render() {
      return (
              <div className="ContentData">
                    <h3>Personal Skills</h3>
                    
                    <div className="ContentInside container">
                        <div className="row">
                          <div className="leftList col-sm-6">Team work</div>
                          <div className="rightList col-sm-6">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>

                        <div className="row">
                          <div className="leftList col-sm-6">Team management</div>
                          <div className="rightList col-sm-6">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>

                        <div className="row">
                          <div className="leftList col-sm-6">Analytical skills</div>
                          <div className="rightList col-sm-6">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>

                        <div className="row">
                          <div className="leftList col-sm-6">Creativity</div>
                          <div className="rightList col-sm-6">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>

                        <div className="row">
                          <div className="leftList col-sm-6">Designs</div>
                          <div className="rightList col-sm-6">&#8226; &#8226; &#8226; <span style={{color: 'grey'}}>&#8226; &#8226;</span></div>
                        </div>

                        <div className="row">
                          <div className="leftList col-sm-6">Staff training</div>
                          <div className="rightList col-sm-6">&#8226; &#8226; &#8226; &#8226; <span style={{color: 'grey'}}>&#8226;</span></div>
                        </div>

                        <div className="row">
                          <div className="leftList col-sm-6">Communication</div>
                          <div className="rightList col-sm-6">&#8226; &#8226; &#8226; &#8226; &#8226;</div>
                        </div>
                    </div>
              </div>
            );
    }
}
  
export default PersonalSkills;
