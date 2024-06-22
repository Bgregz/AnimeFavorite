import React, { useState } from 'react';
import PageNav from '../components/PageNav';
import Card from '../components/Card';
import AnimeList from '../components/AnimeList';

function Homepage({ anime }) {
  const [currentAnime, setCurrentAnime] = useState({});

  function moreInformation(listInfo) {
    const selectedAnime = {
      title: listInfo.title,
      year: listInfo.released,
      episodes: listInfo.episodes,
      images: listInfo.img,
      rank: listInfo.rank,
      score: listInfo.score,
      status: listInfo.status,
      synopsis: listInfo.synopsis,
    };
    setCurrentAnime(selectedAnime);
  }

  const animeList = anime.map((listInfo, index) => (
    <button
      className='animeButton'
      onClick={() => moreInformation(listInfo)}
      key={index}>
      <AnimeList anime={listInfo} />
    </button>
  ));

  console.log('current', currentAnime);

  return (
    <div className='cardClass'>
      <PageNav />
      <div className='display'>
        <div className='animeInfo'>{animeList}</div>
        <div className='animeHeaders'>
          <Card anime={currentAnime} />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
