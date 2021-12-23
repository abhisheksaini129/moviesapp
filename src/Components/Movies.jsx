import React,{Component} from 'react'
import { movies } from './GetMovies'


export default class Movies extends Component {
  constructor(){
    super();
    this.state={
      parr:[1]
    }
  }
  render() {
    let movie=movies.results
    return (
      <>
      { movie.length ==0 ?
               //////////////loader if movies not fetched////
           <div className="d-flex align-items-center">
           <strong>Loading...</strong>
           <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
           </div> :
          <div>
            <h3 className='text-center'>
              <strong>Trending</strong>
            </h3>
            <div className='movie-area'>{
              movie.map((movieObj)=>(
                     <div className="card movies-card" style={{width: '18rem'}}>
                     <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movies-img" style={{height:"35vh",borderRadius:"4px"}}/>
                     <div className="card-body">
                       <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                       <p className="card-text movies-text">{movieObj.overview}</p>
                       <div className="button-area">
                       <a href="#" className="btn btn-primary">Buy Now</a>
                       <a href="#" className="btn btn-outline-primary">Add to Favourite</a>
                       </div>
                     </div>
                   </div>
                   ))
                 }

             {/* //////pagination////////// */}

             <nav aria-label="...">
 <ul class="pagination">
   <li class="page-item disabled">
     <a class="page-link">Previous</a>
   </li>
   {
     this.state.parr.map((value)=>(
      <li class="page-item active"><a class="page-link" href="#">{value}</a></li>
     
     ))
   }
   
   <li class="page-item">
     <a class="page-link" href="#">Next</a>
   </li>
 </ul>
</nav>


         </div>
       </div>
     }
     </>
    )
  }
}

