import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';




class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="resume-left-col"col={6}>
          </Cell>
          <Cell className="resume-right-col" col={6}>
            <h2>Education</h2>

            <Education
              Location="D. No. 25/1/14 3rd Lane Near Ring Road korete padu, Chandramouli Nagar, Guntur, Andhra Pradesh 522007, India"
              startYear="June-2010"
              endYear="April-2011"
              schoolName="Bhashyam School Residential Campus"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 Location= "815, Jal Vayu Vihar, Kukatpally, Hyderabad, Telangana 500072, India"
                 startYear="June-2011"
                 endYear="April-2013"
                 schoolName="Narayana junior college KPIC IIT boys hostel"
                 schoolDescription="Yet to Write"/>

               <Education
                 Location= "Dundigal Road, Dundigal, Hyderabad, Telangana 500043, India"
                 startYear="sep-2013"
                 endYear="May-2017"
                 schoolName="Institute of Aeronautical Engineering"
                 schoolDescription="Yet to Write"/>


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
