import React, { useState } from "react";

function UpdatedComponent(OriginalComponent) {
  function NewComponent() {
    const [cost, setCost] = useState(10);

    let handleCost = () => {
      setCost(cost + 10);
    };

    return <OriginalComponent handleCost={handleCost} cost={cost} />;
  }

  return NewComponent;
}

export default UpdatedComponent;
