import React, { Component } from 'react'
import Player from './player'
import {Grid, Cell} from 'react-mdl'
import './player.css'

class Music extends Component {
  render () {
    return (
        <Grid >
          <Cell className="leftcol" col={12}>
            <h2 className="interviews">MUSIC </h2>
            <Player/>
          </Cell>

        </Grid>

    )
  }
}
export default Music;
