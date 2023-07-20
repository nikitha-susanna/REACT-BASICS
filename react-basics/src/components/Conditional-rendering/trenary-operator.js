import React, { useState } from "react";

function UserLoginMessage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>{isLoggedIn ? <h1>Welcome Nikitha</h1> : <h1>Welcome Guest</h1>}</div>
  );
}

export default UserLoginMessage;
