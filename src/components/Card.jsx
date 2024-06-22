function Card({anime}){

  if (Object.keys(anime).length === 0) {
    return <p>Please Select an Anime</p>;
  }

console.log(anime)
return(
  
    <div>

   
  <img src = {anime.images} alt={anime.title} className="animePictures" />
  <p><b>{anime.title}</b></p>
  <p><b>Episodes: {anime.episodes}</b></p>
  <p><b>Rank:{anime.rank}</b></p>
  <p><b>Released: {anime.year}</b></p> 
  <p><b>score: {anime.score} </b></p>
  <p><b>status: {anime.status} </b></p>
  <p><b> {anime.synopsis} </b></p>
  </div>
  
);
};


export default Card;