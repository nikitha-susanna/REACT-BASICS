import React, { Component } from 'react';

class Welcome extends Component { //
   render() {
      const {name, heroname} = this.props
      return (
         <div>
            <h1>welcom {name} a.k.a  {heroname}</h1> 
         </div>
      );
   }
}

export default Welcome;