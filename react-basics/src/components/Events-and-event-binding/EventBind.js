import React, { useState } from 'react';

function EventBind(props) {
   const [message, setMessage] = useState('Hello')
   const handleClick = () => {
      setMessage('Good Bye')
   }
   return (
      <div>
         <div>{message}</div>
         <button onClick={() => handleClick()}>Click</button>
      </div>
   );
}

export default EventBind;