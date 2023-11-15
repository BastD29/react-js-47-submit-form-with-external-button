// import { useState } from "react";

// function Item2() {
//   const [cost, setCost] = useState(10);

//   let handleCost = () => {
//     setCost(cost + 10);
//   };

//   return (
//     <div className="item2">
//       <h1>
//         Item2 cost: <span>{cost}</span>
//       </h1>
//       <button onClick={handleCost}>Increase cost</button>
//     </div>
//   );
// }

// export default Item2;

import UpdatedComponent from "./UpdatedComponent";

function Item2({ cost, handleCost }) {
  return (
    <div className="item2">
      <h1>
        Item2 cost: <span>{cost}</span>
      </h1>
      <button onClick={handleCost}>Increase cost</button>
    </div>
  );
}

export default UpdatedComponent(Item2);
