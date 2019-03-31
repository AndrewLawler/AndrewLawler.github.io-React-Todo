import React from 'react'

function About() {
  return (
    <React.Fragment>
        <div style={{border: '1px solid #4040bf'}}>
            <h1 style={aboutStyle}> About </h1>
            <p style={paraStyle}> <br /> This is the Todo app v1.0.1. <br /><br />It is a project i built using the help of a crash course. 
            <br />On-top of what the crash course told me, lots of changes have been made. <br /><br />
            Created By: Andrew Lawler <br />
            Date: 31/03/2019
            </p>
            <br />
        </div>
    </React.Fragment>
  )
}

const aboutStyle = {
    color: '#4040bf',
    paddingTop: '20px',
}

const paraStyle = {
    color: '#4040bf'
}


export default About;