import PageNav from "../components/PageNav";
import axios from "axios";
import { useState,useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import Card from "../components/Card";
import FavoriteCard from "../components/FavoriteCard";

function Favorites() {
const {currentUser} = useContext(UserContext)
const [favorites, setFavorites] = useState([])


useEffect(()=>{  

  const retrieveFavorites = async()=> {
    
    try{
      
      const response = await axios.get(`http://localhost:8080/jpa/users/${currentUser}/anime`);
      console.log(response.data)
      // setFavorites((previous)=> [...response.data])

      setFavorites(()=> [...response.data])
      
    }catch(error){
      console.log(error)
      
      
    }
    
  }
  retrieveFavorites()
  
},[] )

console.log('this is favorites', favorites)

const favoriteList = favorites.map((favoriteInfo, index) => (

  <FavoriteCard favoriteInfo={favoriteInfo}/>
  
));
  
  
  return (
    <div>
      <PageNav />
      <div className="favoritesPage">
      {favoriteList}
         </div>
    </div>
  );
}

export default Favorites;