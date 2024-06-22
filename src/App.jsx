import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Homepage from './pages/Homepage.jsx';
import Favorites from './pages/Favorites';

function App() {
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    async function getAnime() {
      try {
        const fetchData = await fetch(`https://api.jikan.moe/v4/top/anime`);
        const data = await fetchData.json();
        console.log('data', data);
        const animeList = data.data.map((list, index) => ({
          title: list.title,
          released: list.year,
          episodes: list.episodes,
          img: list.images?.webp?.image_url,
          rank: list.popularity,
          score: list.score,
          status: list.status,
          synopsis: list.synopsis,
          key: index,
        }));
        setAnime(animeList);
      } catch (error) {
        console.log('An error occurred:', error);
      }
    }
    getAnime();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Homepage anime={anime} />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
