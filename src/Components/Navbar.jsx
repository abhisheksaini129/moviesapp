import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',width:'100vw', height:'5rem',backgroundColor:'#0C69F1'}}>
                <h1>
                    Movies app
                </h1>
                <h2 style={{marginLeft:'1rem',marginTop:'1.5rem'}}> Favourite</h2>
            </div>
        )
    }
}
