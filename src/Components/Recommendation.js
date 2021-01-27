import React from 'react'
import AudioPlayer from './AudioPlayer.js'

function Recommendation({recNum, track, artist, coverArtURL, preview}) {

    const videoJsOptions = {
        autoplay: false,
        controls: true,
        sources: [
          {
            src: `${preview}`,
            type: 'video/mp4',
          },
        ],
      };

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
                { preview != "null" && <AudioPlayer recNum={recNum} { ...videoJsOptions } />}
            </div>
        </div>
    )
}

export default Recommendation
