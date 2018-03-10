import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';



class App extends Component {
    //Render: componentWillMount() -> render() -> componentDidMount()
    //Update: componentWillReceiveProps() -> shouldComponetUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
    state = {

    }
    componentWillMount() {
        console.log('will mount');
    }
    componentDidMount() {
        this._getMovies()
    }
    _callApi = () => {
        //'http://api.themoviedb.org/3/movie/550?api_key=65e043c24785898be00b4abc12fcdaae'
        return fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating')
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))
    }
    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies
        })
    }
    _renderMovies = () => {
        return this.state.movies.map((movie) => {
            return <Movie 
                title={movie.title_english}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                synopsis={movie.synopsis}
                key={movie.id}
            />
        })
    }
    render() {
        const { movies } = this.state;
        return (
            <div className={movies ? "App" : "App__Loading"}>
                {movies ? this._renderMovies() : 'Loading'}
            </div>
        );
    }
}

export default App;
