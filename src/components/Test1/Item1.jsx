// import { useState } from "react";

// function Item1() {
//   const [cost, setCost] = useState(10);

//   let handleCost = () => {
//     setCost(cost + 10);
//   };

//   return (
//     <div className="item1">
//       <h1>
//         Item1 cost: <span>{cost}</span>
//       </h1>
//       <button onClick={handleCost}>Increase cost</button>
//     </div>
//   );
// }

// export default Item1;

import UpdatedComponent from "./UpdatedComponent";

function Item1({ cost, handleCost }) {
  return (
    <div className="item1">
      <h1>
        Item1 cost: <span>{cost}</span>
      </h1>
      <button onClick={handleCost}>Increase cost</button>
    </div>
  );
}

export default UpdatedComponent(Item1);
