import React, { Component } from 'react';

class Compose extends Component {
    constructor() {
        super();
        
    }

    newComment = () => {
       let newChirp= document.createElement('div');
       
    }
    render() { 
        return ( 
            <div id='new-Comment-Btn'>
                <button onClick= {this.newComment}>New Chirp</button>
            </div>
         );
    }
}
 
export default Compose;