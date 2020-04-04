import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
            src="https://scontent.fewr1-6.fna.fbcdn.net/v/t1.0-9/35043519_1617554595009763_6441117305114984448_o.jpg?_nc_cat=103&_nc_sid=dd9801&_nc_ohc=CqxNNtEMVtIAX-1GM69&_nc_ht=scontent.fewr1-6.fna&oh=06d7644fa2e1de6bf62f77e23aab1d49&oe=5E939751"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer/Data Scientist</h1>
              
            <hr/>

          <p>HTML/CSS | Python | JavaScript | React | Tensorflow| Django | Flask | PostgreSQL</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mahidhar96/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/illuri96" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Faceboook */}
          <a href="https://www.facebook.com/mahidhar.illuri" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook" aria-hidden="true" />
          </a>


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
