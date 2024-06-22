function AnimeList({ anime }) {
    return (
        <div>
          
        <p className='animeList'>
  
          <img src={anime.img} alt={anime.title} width='100px' height='100' />
          <p>
            <b>{anime.title}</b>
          </p>
        </p>
          
      </div>
    );
  }
  
  export default AnimeList;