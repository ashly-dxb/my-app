import React, {Component} from 'react';

class WorkExperience extends Component {
    render() {
      return (
        <div className="ContentData">
          <h3>Contact Me</h3>

          <div className="ContentInside container">
            <div className="row">
              <div className="leftList col-sm-6">Mobile</div>
              <div className="rightList col-sm-6">+971 - 50 857 0803</div>
            </div>

            <div className="row">
              <div className="leftList col-sm-6">Email</div>
              <div className="rightList col-sm-6"><a className="custLink" href="mailto:ashlythomas@gmail.com">ashlythomas@gmail.com</a></div>
            </div>

            <div className="row">
              <div className="leftList col-sm-6">LinkedIn</div>
              <div className="rightList col-sm-6"><a className="custLink" target="blank" href="https://linkedin.com/in/ashly1">https://linkedin.com/in/ashly1</a></div>
            </div>
          </div>
        </div>
      );
    }
}
  
export default WorkExperience;
