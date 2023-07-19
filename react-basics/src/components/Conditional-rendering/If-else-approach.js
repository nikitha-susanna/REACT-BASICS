import React, { useState } from 'react';

function UserGreeting (props) {
   const [isLoggedIn, setIsLoggedIn] = useState(true)

   if (isLoggedIn){
      return (
         <h1>Welcome Nikitha</h1>
      )
   } else {
      return (
         <h1>Welcome Guest</h1>
      )
   }
}

export default UserGreeting ;