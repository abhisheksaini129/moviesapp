import React,{Component} from 'react'
// import { movies } from './GetMovies'
import axios from 'axios';
import Baaner from './Baaner';
export default class Movies extends Component {
  constructor(){
    super();

    this.state={
      movies:[],
      parr:[1],
      currPage:1,
      favourites:[]
    }
  }
  async componentDidMount(){
    // side effect wale kaam sare yha honge 
    let newPage = this.state.currPage + 1;
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${newPage}`);
     let data = res.data;
     this.setState({
       movies:[...data.results]
     })
    console.log("mounting done");
  }
  changeMovies=async()=>{
    let newPage = this.state.currPage + 1;
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${newPage}`);
     let data = res.data;
     this.setState({
       movies:[...data.results]
     })
  }
  handleRight=()=>{
    let tempArr=[];
    for(let i=1;i<=this.state.parr.length+1;i++){
        tempArr.push(i);
    }
    this.setState({
      parr:[...tempArr],
      currPage:this.state.currPage+1
    },this.changeMovies)
    
  }
  handLeft=()=>{
    if(this.state.currPage !='1'){
      this.setState({
        currPage:this.state.currPage-1
      },this.changeMovies)
    }
  }
  handlePage=(e)=>{
    this.setState({
      currPage:e
    },this.changeMovies)
    
  }
  handleFavourite=(movie)=>{
    let oldData = JSON.parse(localStorage.getItem('movies-app') ||'[]');
      if(this.state.favourites.includes(movie.id)){
        oldData=oldData.filter((m)=>m.id!=movie.id);
      }else{
        oldData.push(movie);
      }
      localStorage.setItem('movies-app',JSON.stringify(oldData))
      console.log(oldData);
  }
  render() {
    console.log("in the render");
    // let movie=this.state.movies.results
    return (
      <>
      <Baaner></Baaner>
      { this.state.movies.length == 0 ?
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
              this.state.movies.map((movieObj)=>(
                     <div className="card movies-card" style={{width: '18rem'}}>
                     <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top movies-img" style={{height:"35vh",borderRadius:"4px"}}/>
                     <div className="card-body">
                       <h5 className="card-title movies-title">{movieObj.original_title}</h5>
                       <p className="card-text movies-text">{movieObj.overview}</p>
                       <div className="button-area">
                       <a  className="btn btn-primary">Buy Now</a>
                       <a  className="btn btn-outline-primary" onClick={()=>this.handleFavourite(movieObj)}>Add to Favourite</a>
                       </div>
                     </div>
                   </div>
                   ))
                 }

             {/* //////pagination////////// */}

             <nav aria-label="...">
 <ul className="pagination">
   <li className="page-item ">
     <a className="page-link" onClick={this.handLeft}>Previous</a>
   </li>
   {
     this.state.parr.map((value)=>(
      <li className="page-item " onClick={()=>{this.handlePage(value)}}><a class="page-link" >{value}</a></li>
     
     ))
   }
   
   <li className="page-item">
     <a className="page-link"onClick={this.handleRight}>Next</a>
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

