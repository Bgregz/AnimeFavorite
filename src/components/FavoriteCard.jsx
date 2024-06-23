const FavoriteCard= ({favoriteInfo}) => {
    console.log(favoriteInfo)

return(
<div className= "favoritesAlignment">
      
        <img src={favoriteInfo.img} alt={favoriteInfo.title} className="imageContainer"  />
      <p>
        <b>{favoriteInfo.title}</b>
      </p>
      
    
      {/* <p>
        <b>Episodes: {favoriteInfo.episodes}</b>
      </p>
      <p>
        <b>Rank:{favoriteInfo.rank}</b>
      </p>
      <p>
        <b>Released: {favoriteInfo.year}</b>
      </p>
      <p>
        <b>score: {favoriteInfo.score} </b>
      </p>
      <p>
        <b>status: {favoriteInfo.status} </b>
      </p>
      <p>
        <b> {favoriteInfo.synopsis} </b>
      </p> */}
    </div>
  );
}






export default FavoriteCard