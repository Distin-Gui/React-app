import axios from 'axios'
import React from 'react'
//import { render } from 'react-dom';
//import $ from 'jquery'
//import { Link } from "react-dom"

//const API_key = 'api_key=5eb8e035a7983f93226783b942b0723b'

  function getMovies(){
    var output ;
    const a = axios.get('https://api.themoviedb.org/3/movie/popular?api_key=5eb8e035a7983f93226783b942b0723b&page=1');
    a.then( resp => {
      console.log(resp.data);
      let m = resp.data.results;
      let url = new Array(m.length);
      var i = 0;
      m.forEach(movie => {
        url[i] = 'https://image.tmdb.org/t/p/w185'+movie.poster_path;
        i++;
      })
     for ( var j = 0 ; j < url.length; i++){
      output +=  <div> <img src ={url[j]} alt="" /> </div>;
     }
    })
    a.catch( err =>{
      console.log(err);
    })
    //output =  <div> <img src ={url[i]} alt="" /> </div>;
  
      return output

  }

 


  const Movie = () => getMovies()

  export default Movie;