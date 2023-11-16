import React, { useState } from "react";

function MyForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username", username);
  };

  return (
    // what makes the difference is the id attribute "myForm"
    <form id="myForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
}

export default MyForm;
