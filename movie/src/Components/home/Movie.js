import axios from 'axios'
import React from 'react';

//apiKey = '5eb8e035a7983f93226783b942b0723b';
//url = 'https://api.themoviedb.org/3';
let page = 1;
const popular = `https://api.themoviedb.org/3/movie/popular?api_key=5eb8e035a7983f93226783b942b0723b&language=en-US&page=${page}`;


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
        <div className = "container col-xs-6"> 
            <div className ="row">
          { this.state.movies.map(movie =>  <div className = "card border-dark mb-3 align-items-center justify-content-center" style = {{width : 220, marginLeft: '.5rem'}}  key={movie.title.toString()}>
            <div className = "card-header" style = {{marginTop : 10}}> <img style = {{ height : 270, width :200}} src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt ={movie.title} />
                                                        <div className = "card-body  " style = {{ height : 130, width :200}}> <h5 className="card-title">{movie.title}</h5> </div> 
                                                        <div> <a href = "Details.js" style = {{ height : 80, width :200}}>Details</a>  </div> </div> </div>)}
              </div> 
              <div className="btn-toolbar d-flex align-items-center justify-content-center " role="toolbar" aria-label="Toolbar with button groups">
        <div className="btn-group me-2" role="group" aria-label="First group">
          <button type="submit" className="btn btn-secondary" >Back</button>
  
        </div>
        <div className="btn-group me-2" role="group" aria-label="Second group">
          <button type="submit" className="btn btn-secondary" >Next</button>
        </div>
      </div>
        </div>
        

      )
    }
}