import React, { useContext, useState } from "react";

const FlyoutContext = React.createContext(null);

export default function FlyoutProvider({ children }) {
  const [open, toggle] = useState(false);

  const value = { open, toggle };
  return (
    <FlyoutContext.Provider value={value}>{children}</FlyoutContext.Provider>
  );
}

function Toggle() {
  let { open, toggle } = useContext(FlyoutContext);
  return <button onClick={() => toggle(!open)}>Menu</button>;
}

function List({ children }) {
  let { open } = useContext(FlyoutContext);
  return open ? children : null;
}

function Item({ children }) {
  return children;
}

FlyoutProvider.Toggle = Toggle;
FlyoutProvider.List = List;
FlyoutProvider.Item = Item;
