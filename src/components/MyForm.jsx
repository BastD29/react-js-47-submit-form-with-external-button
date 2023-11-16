import React, { useState } from "react";

function MyForm() {
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("username", username);
  };

  return (
    <div>
      {/* what makes the difference is the id attribute  */}
      <form id="myForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
      {/* make the button form attribute correspond to the form id attribute  */}
      <button type="submit" form="myForm">
        Submit
      </button>
    </div>
  );
}

export default MyForm;
