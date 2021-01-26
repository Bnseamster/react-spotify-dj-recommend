import React from 'react'
import VideoPlayer from './VideoPlayer'

function Recommendation({recNum, track, artist, coverArtURL, preview}) {

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        sources: [{
          src: `${preview}`,
          type: 'audio/mpeg'
        }],
        height: 0,
        children: [
            'bigPlayButton', 
            'vjs-control',
            'vjs-button',
            'vjs-paused',
            'controlBar'
        ]
      }

    return (
        <div className='recommendation'>
            <div className='rec-number'>{recNum}</div>
            <div className='rec-img'><img src={coverArtURL} alt={`album cover for ${track} by ${artist}`}></img></div>
            <div className='rec-name'>
                <h2 className='track-name'>{track}</h2>
                <p>by</p>
                <h3 className='artists-name'>{artist}</h3>        
            </div>        
            <div className='rec-preview'>
                <VideoPlayer { ...videoJsOptions } />
            </div>
        </div>
    )
}

export default Recommendation
