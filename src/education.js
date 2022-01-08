import React, {Component} from 'react';

class Education extends Component {
    render() {
      return (
        <div className="ContentData">
            <h3>Educational History</h3>
            
            <div className="ContentInside">
                <h4>Mahatma Gandhi University, Kottayam</h4>
                <h5>Bachelor of Science | Jul 1997 - Mar 2000</h5>
                <h6>Studied Mathematics</h6>
                <br />

                <h4>ET & T Computer Education, Chengannur</h4>
                <h5>Advanced Diploma in Computer Software Technology | Aug 2000 - Dec 2001</h5>
                <h6>Studied programming languages: C, C++, Visual Basic, Java, and Oracle</h6>
            </div>
        </div>
      );
    }
}
  
export default Education;
