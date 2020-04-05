import YouTube from '@u-wave/react-youtube'
import React,{Component} from 'react'


class PlayerMovies extends Component{
  render(){
    return(
          <YouTube
              video= 'VPV0idcPJ0s'
              className = 'Content-Interviews'
              width = '400'
              height = '300'
              showCaptions = 'true'
              annotations = 'false'
              showRelatedVideos = 'false'
              suggestedQuality = '1080p'
          />
        )
      }
}
export default PlayerMovies;
