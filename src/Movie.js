import React from 'react';
//import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

/*class Movie extends Component {
  
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
  }

  render() {
    console.log(this.props.title);
    return (
        <div className="MovieList">
            <MoviePoster poster={this.props.poster} />
            <h1>{this.props.title}</h1>
        </div>
    );
  }
}*/
function Movie({title, poster, genres, synopsis}){
  return (
      <div className="Movie">
          <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title} />
          </div>

          <div className="Movie__Columns">
            
            <h1>{title}</h1>
            <div className="Movie__Genres">
              {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
            </div>
            <p className="Movie__Synopsis">{synopsis}</p>
          </div>
            

      </div>
  );
}

function MovieGenre({genre}) {
  return (
     <span className="Movie__genre">{genre}</span>
  )
}

/*
class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired
  }

  render() {
    return (
        <img src={this.props.poster} alt="" />
    );
  }
}
*/
//이전보다 적은양의 코드만 작성
function MoviePoster({poster, alt}) {
  return (
     <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
}

export default Movie;
