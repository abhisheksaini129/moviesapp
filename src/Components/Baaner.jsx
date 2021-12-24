import {movies} from './GetMovies';
import React, { Component } from 'react'
export default class Baaner extends Component {
    render() {
      let movie= movies.results[1];
      // let movie=''
      // console.log(movie);
        return (
          <>
          { movie ===''?
                //////////////loader if movies not fetched////
            <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div> :
              ////otherwise movies will upload here
            <div className="card banner-card" >
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className ="card-img-top banner-img" alt=""/>
              <h3 className="card-title banner-title">{movie.original_title}</h3>
              <p className="card-text banner-text">{movie.overview}</p>
          </div>
          }
          </>
        )
    }
}
