import { useState, useEffect } from 'react'
import Recommendation from './Recommendation'

const Recommendations = ({recommendations}) => {
    // const [buttonLabels, setButtonLabels] = useState([]);
    let buttonLabels = []
    useEffect(()=>{
        console.log(buttonLabels)

    },[buttonLabels])

    let getButtonLabels = ()=>{  
        let buttonLabels = Array.from(document.querySelectorAll('.vjs-play-control .vjs-control-text'));
        console.log(buttonLabels)

        if(buttonLabels.length == 0){
            return
        }else{
            buttonLabels.forEach((l)=>{
                l.addEventListener('click', ()=>{
                    l.innerHTML = 'Broo'
                    console.log('hello')
                })
            })
        }
    }
   
    return (
        <section className='container recommendations'>
            {console.log(recommendations)}
            {recommendations.map((recommendation,index)=>( 
                <Recommendation key = {index} recNum = {index + 1} track={JSON.stringify(recommendation.name)} artist={recommendation.artists[0].name} coverArtURL = {`${recommendation.album.images[1].url}`} preview={`${recommendation.preview_url}`}/>   
            ))}
            {getButtonLabels}
        </section>
    )
}

export default Recommendations
