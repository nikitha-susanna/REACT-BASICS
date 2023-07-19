import React from 'react';

function Greet({name, heroname}) {
   // const {name, heroname} = props another way to destructure
   return (
      <div>
         <h1>Hello {name} a.k.a {heroname}</h1>
      </div>
   );
}

export default Greet;