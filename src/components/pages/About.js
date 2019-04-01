import React from 'react';
import './About.css';

function About() {
  return (
    <React.Fragment>
        <div style={{border: '1px solid #967E18'}}>
            <h1 style={{paddingTop: '20px', textDecoration: 'underline'}}> About </h1>
            <p style={{paddingTop: '10px'}}> 
            This is the Todo app v1.0.1. <br /><br />It is a project i built using the help of a crash course. 
            <br />On-top of what the crash course told me, lots of changes have been made. <br /><br />
            Created By: Andrew Lawler <br />
            Date: 31/03/2019
            </p>
            <br />
        </div>
    </React.Fragment>
  )
}
export default About;