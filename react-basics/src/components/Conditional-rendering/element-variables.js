import React, { Component } from 'react';

class UserWelcome extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        isLoggedin: true
     };
   };
   
   render() {
      let message
      if(this.state.isLoggedin) {
         message = <h1>Welcome Nikitha</h1>
      } else {
         message = <h1>Welcome Guest</h1>
      }
      return (message);
   }
}

export default UserWelcome;