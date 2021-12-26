import React, { Component } from 'react'
import { movies } from './GetMovies'
import Movies from './Movies'
export default class Favourite extends Component {
    constructor(){
        super();
        this.state={
            genress:[]
        }
    }
    handleDelete=(movieOb)=>{
        let oldData = JSON.parse(localStorage.getItem('movies-app') );
        oldData=oldData.filter((m)=>m.id!=movieOb.id);
      
      localStorage.setItem('movies-app',JSON.stringify(oldData));
      
    }
    render() {
        const movie=JSON.parse(localStorage.getItem('movies-app'));
        return (
            <div>
               <>
               <div className="main">
                   <div className="row">
                   <div className="col-3 "> 
                   <ul class="list-group favourites-genres ">
                        <li class="list-group-item">All Genre</li>
                        <li class="list-group-item">Action</li>
                        <li class="list-group-item">Sci-fi</li>
                        <li class="list-group-item">Comedy</li>
                        <li class="list-group-item">Horror</li>
                        </ul></div>

                   <div className="col-9 favourites-table">
                       <div className="row ">
                           <input type="text" className='input-group-text col' />
                           <input type="number" className='input-group-text col' />
                       </div>
                       <table class="table">
                                <thead>
                                    <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        movie.map((movieObj)=>(
                                            <tr>
                                            <td><img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movies-img" style={{height:"10vh",width:"7vw",borderRadius:"4px"}}/></td>
                                            <td>{movieObj.original_title}</td>
                                            <td></td>
                                            <td>{movieObj.vote_average}</td>
                                            <td><button type="button"href="#" class="btn btn-danger"onClick={()=>this.handleDelete(movieObj)}>Delete</button></td>
                                            </tr>
                                        ))
                                    }
                                    
                                </tbody>
                        </table>
                   
                   <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                            </li>
                        </ul>
                    </nav>
                    </div>
                   </div>
               </div>
               </> 
            </div>
        )
    }
}
