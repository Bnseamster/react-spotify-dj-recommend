import { useState, useEffect } from 'react'
import Recommendation from './Recommendation'


// const CLIENT_ID = '5895f98c24ce4792826ece2403169238'
// const CLIENT_SECRET = 'bce4f73f463f492c925b57164f0986d8'
// const acceptableGenres = [
//     "acoustic",
//     "afrobeat",
//     "alt-rock",
//     "alternative",
//     "ambient",
//     "anime",
//     "black-metal",
//     "bluegrass",
//     "blues",
//     "bossanova",
//     "brazil",
//     "breakbeat",
//     "british",
//     "cantopop",
//     "chicago-house",
//     "children",
//     "chill",
//     "classical",
//     "club",
//     "comedy",
//     "country",
//     "dance",
//     "dancehall",
//     "death-metal",
//     "deep-house",
//     "detroit-techno",
//     "disco",
//     "disney",
//     "drum-and-bass",
//     "dub",
//     "dubstep",
//     "edm",
//     "electro",
//     "electronic",
//     "emo",
//     "folk",
//     "forro",
//     "french",
//     "funk",
//     "garage",
//     "german",
//     "gospel",
//     "goth",
//     "grindcore",
//     "groove",
//     "grunge",
//     "guitar",
//     "happy",
//     "hard-rock",
//     "hardcore",
//     "hardstyle",
//     "heavy-metal",
//     "hip-hop",
//     "holidays",
//     "honky-tonk",
//     "house",
//     "idm",
//     "indian",
//     "indie",
//     "indie-pop",
//     "industrial",
//     "iranian",
//     "j-dance",
//     "j-idol",
//     "j-pop",
//     "j-rock",
//     "jazz",
//     "k-pop",
//     "kids",
//     "latin",
//     "latino",
//     "malay",
//     "mandopop",
//     "metal",
//     "metal-misc",
//     "metalcore",
//     "minimal-techno",
//     "movies",
//     "mpb",
//     "new-age",
//     "new-release",
//     "opera",
//     "pagode",
//     "party",
//     "philippines-opm",
//     "piano",
//     "pop",
//     "pop-film",
//     "post-dubstep",
//     "power-pop",
//     "progressive-house",
//     "psych-rock",
//     "punk",
//     "punk-rock",
//     "r-n-b",
//     "rainy-day",
//     "reggae",
//     "reggaeton",
//     "road-trip",
//     "rock",
//     "rock-n-roll",
//     "rockabilly",
//     "romance",
//     "sad",
//     "salsa",
//     "samba",
//     "sertanejo",
//     "show-tunes",
//     "singer-songwriter",
//     "ska",
//     "sleep",
//     "songwriter",
//     "soul",
//     "soundtracks",
//     "spanish",
//     "study",
//     "summer",
//     "swedish",
//     "synth-pop",
//     "tango",
//     "techno",
//     "trance",
//     "trip-hop",
//     "turkish",
//     "work-out",
//       "world-music"]

const Recommendations = ({recommendations}) => {
    
//     const [token, setToken] = useState('');
//     const [artistID, setArtistID] = useState('');
//     const [trackID, setTrackID] = useState('');
//     const [recommendations, setRecommendations] = useState([]);
    

      
    

//     useEffect(()=> {
//         if(Object.keys(searchParams).length === 0){
//             return console.log('HERE')
//         }
//         setRecommendations([])
//         console.log(searchParams)
//         let artist = searchParams.artist;
//         let track = searchParams.track;
//         let genre = searchParams.genre;
//         let tempo = searchParams.tempo === ''? '' :`&target_tempo=${searchParams.tempo}`
//         let key = searchParams.key === '' ? '' :`&target_key=${searchParams.key}`
//         let popularity = 20;
//         let searchLimit = 1;
//         console.log(searchParams)
//         axios('https://accounts.spotify.com/api/token', {
//             headers: {
//                 'Content-Type' : 'application/x-www-form-urlencoded',
//                 'Authorization' : 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)      
//             },
//             data: 'grant_type=client_credentials',
//               method: 'POST'
//         })
//             .then(tokenResponse => {
                      
//                 setToken(tokenResponse.data.access_token);
            
//                 //search for artist ID (Search for an Item endpoint)**Default to song's artist/s
//                 axios(`https://api.spotify.com/v1/search?q=${artist}&type=artist&market=US&limit=${searchLimit}`, {
//                     method: 'GET',
//                     headers: { 'Authorization' : 'Bearer ' + token}
//                 })
//                     .then(response => {
                      
                        
//                         setArtistID(response.data.artists.items[0].id);
//                         //If genre empty set to artist's genres
//                         console.log(response.data.artists)
//                         genre = genre.length === 0 ? response.data.artists.items[0].genres: genre;
                        
//                         if(genre.length > 3){
//                             let genres =[]
//                             while(genres.length < 3){
//                                 if(genre[randomIndex(genre.length)]){
//                                     let index = randomIndex(genre.length);
//                                     genres.push(genre[index]);
//                                     genre.splice(index,1);
//                                 }

//                             }
//                             genre = genres.join(',')
//                         }else{
//                             genre.join(',')
//                         }
//                         console.log(genre)
                         
                        
//                         //search for track ID (Search for an Item endpoint)**Default to artists top songs if none given
//                         console.log(`https://api.spotify.com/v1/artists/${artistID}/top-tracks`)
//                         axios(`https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=US`, {
//                             method: 'GET',
//                             headers: { 'Authorization' : 'Bearer ' + token}
//                         })
//                             .then(response => {
//                                 console.log(response.data.tracks) 
//                                 setTrackID(response.data.tracks[0].id);
                               

//                                 //search for related tracks (Get Recommendations Based on Seeds endpoint) has parameters of [limit, market, seed_artists*,seed_genres*,seed_tracks*, target_dancability, target_energy, target_key, target_tempo, target_popularity ]
//                                 //https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=${artistID}&seed_genres=${genre}&seed_tracks=${trackID}
//                                 console.log(`https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=${artistID}&seed_genres=${genre}&seed_tracks=${trackID}${tempo}`)
//                                 axios(`https://api.spotify.com/v1/recommendations?limit=50&market=US&seed_artists=${artistID}&seed_genres=${genre}&seed_tracks=${trackID}&min_popularity=${popularity}${tempo}`, {
//                                     method: 'GET',
//                                     headers: { 'Authorization' : 'Bearer ' + tokenResponse.data.access_token}
//                                 })
//                                     .then(response => {
                
//                                         setRecommendations(response.data.tracks)
//                                         console.log(response.data.tracks)
//                                     })
//                                     .catch((error) => {
//                                         console.error(error);
//                                     })

//                             })
                        
//                     })

//             });
    
//     },[searchParams])
    
    

//     function randomIndex(indexLength){
//         return Math.floor(Math.random()*indexLength)
//     }
    // recommendations.forEach((e)=>{
    //     console.log(`'${e.name}' by ${e.artists[0].name}`)
    // })
    
   
    return (
        <section className='container recommendations'>
            {recommendations.map((recommendation,index)=>( 
                <Recommendation recNum = {index + 1} track={JSON.stringify(recommendation.name)} artist={recommendation.artists[0].name} coverArtURL = {`${recommendation.album.images[1].url}`} preview={`${recommendation.preview_url}`}/>
                
            ))}
        </section>
    )
}

export default Recommendations
