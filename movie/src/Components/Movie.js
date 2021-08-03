import axios from 'axios'
import React from 'react';

//apiKey = '5eb8e035a7983f93226783b942b0723b';
//url = 'https://api.themoviedb.org/3';
const popular = `https://api.themoviedb.org/3/movie/popular?api_key=5eb8e035a7983f93226783b942b0723b&language=en-US&page=1'`;

  export default class Movie extends React.Component {
    state = {
      movies: []
    }
  
    componentDidMount() {
      axios.get(popular)
        .then(res => {
          const movies = res.data.results;
          this.setState({ movies });
        })
    }
  
    render() {
      return (
        <div class = "container"> 

          { this.state.movies.map(movie =>  <div class = "card border-dark mb-3 col-xs-6" style = {{width : 220, display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <div class = "card-header "> <img style = {{ height : 270, width :200}} src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt ={movie.title} />
                                                        <div class = "card-body"> <h5 class="card-title">{movie.title}</h5> </div> </div> </div>)}
        </div> 

      )
    }
}