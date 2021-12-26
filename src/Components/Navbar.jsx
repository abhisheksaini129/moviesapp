import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',width:'100vw', height:'5rem',backgroundColor:'#0C69F1'}}>
                <Link to ='/' style={{textDecoration:'none'}}> <h1 style={{marginLeft:'1rem',marginTop:'1rem',color:'white'}}> Movies app </h1></Link>
               
                <Link to ='fav' style={{textDecoration:'none'}}><h2 style={{marginLeft:'1rem',marginTop:'1.5rem',color:'white'}}> Favourite</h2></Link>
            </div>
        )
    }
}
