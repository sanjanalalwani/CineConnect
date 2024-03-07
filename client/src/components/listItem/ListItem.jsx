import "./listItem.scss";

import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import AddIcon from '@mui/icons-material/Add';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from "axios";
import { useState, useEffect } from "react";

export default function ListItem({ index,item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
 useEffect(()=>{
  const getMovie = async () =>{
    try{
  const res = await axios.get("/movies/find/"+item,{
    headers: {
      token:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTg1ZDg0Zjg4ZmIzOGU1YjdjNTkxYiIsImlhdCI6MTcwOTgyMzQzMCwiZXhwIjoxNzEwMjU1NDMwfQ.FpauY0yB1IVh0M0dkBEeDWXgWwXtwoDVhmhI98TjYHk "
    },
  });
  setMovie(res.data);
    }catch(err){
      console.log(err);
    }
  }
  getMovie();
 },[item]);
  return (

    
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={movie.img}
        alt=""
      />
      {isHovered && (
        <>
          <video src={movie.trailer} autoPlay={true} loop />
          <div className="itemInfo">
            <div className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpOffAltIcon className="icon" />
              <ThumbDownOffAltIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie.duration}</span>
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <div className="desc">
             {movie.desc}
            </div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
}