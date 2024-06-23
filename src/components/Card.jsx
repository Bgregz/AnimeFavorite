import { useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';

function Card({ anime }) {
  const { currentUser } = useContext(UserContext);

  console.log('Currentuser:', currentUser);

  console.log('I am sending this anime to my post request', anime)

  const addToFavorites = async () => {
    try {
      const response = await axios.post(
        `http://localhost:8080/jpa/users/${currentUser}/anime`,
        {
          title: anime.title,
          img: anime.images,
          released: anime.year,
          episodes: anime.episodes,
          rank: anime.rank,
          score: anime.score,
          status: anime.status,
           synopsis: anime.synopsis,
        },
      );
      if ((response.status = 200)) {
        console.log('FavoriteAPI response', response.data);
        alert(response.data);
      }
    } catch (error) {
      console.error('favoriteAPI error', error);
    }
  };

  if (Object.keys(anime).length === 0) {
    return <p>Please Select an Anime</p>;
  }

  return (
    <div>
      <div className='center'>
        <img src={anime.images} alt={anime.title} className='animePictures' />
      </div>
      <div className='center '>
        <button className='favoriteButton' onClick={() => addToFavorites()}>
          Add to Favorites
        </button>
      </div>
      <p>
        <b>{anime.title}</b>
      </p>
      <p>
        <b>Episodes: {anime.episodes}</b>
      </p>
      <p>
        <b>Rank:{anime.rank}</b>
      </p>
      <p>
        <b>Released: {anime.year}</b>
      </p>
      <p>
        <b>score: {anime.score} </b>
      </p>
      <p>
        <b>status: {anime.status} </b>
      </p>
      <p>
        <b> {anime.synopsis} </b>
      </p>
    </div>
  );
}

export default Card;
