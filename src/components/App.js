import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import Filter from "./Filter";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
