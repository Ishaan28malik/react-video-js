/* This file is not being used in the project as of now */

import React from 'react';
import videojs from 'video.js';

export default function VideoPlayer(){
//   componentDidMount() {
    // instantiate Video.js
    tplayer = videojs(this.videoNode, this.props, function onPlayerReady() {
    });
//   }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className='video-js'
          ></video>
        </div>
      </div>
    );
  }
}
