import React from "react";
import Item1 from "./components/Test1/Item1";
import Item2 from "./components/Test1/Item2";

// In React, a HOC is a function that takes a component as an input
// and returns a new enhanced component as output.

// It's like a special function that can make your components
// more powerful and add extra functionality to them.

// const EnhancedComponent = withExtraFunctionality(OriginalComponent)
// const IronMan = withSuit(TonyStark)

export default function App() {
  return (
    <>
      <Item1 />
      <Item2 />
    </>
  );
}
