import React, { Component } from 'react'
import YouTube from 'react-player'
import {Grid, Cell} from 'react-mdl'

class App extends Component {
  render () {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid >
          <Cell className="leftcol" col={6}>
            <h2 className="interviews">Interviews </h2>
            <YouTube className="video" url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
            <p>Description</p>
            <YouTube className="video" url='https://www.youtube.com/watch?v=QoLUB0QkUaE' />
          </Cell>
          <Cell className="rightcol" col={6}>

          </Cell>

        </Grid>

      </div>
  );
  }
}
export default App;
