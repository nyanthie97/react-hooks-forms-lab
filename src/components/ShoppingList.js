import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  function ShoppingList({ items, onItemFormSubmit }) {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setNameSearch] = useState('');
  
    function handleCategoryChange(event) {
      setSelectedCategory(event.target.value);
    }
  
    const itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;
    function handleNameChange(event) {
      setNameSearch(event.target.value);
    }
  
    const itemsToDisplay = items
    .filter((item) => {
      if (selectedCategory === "All") return true;
      return item.category === selectedCategory;
    });
    })
    .filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
  
    return (
      <div className="ShoppingList">
        <ItemForm />
        <Filter onCategoryChange={handleCategoryChange} />
        <ItemForm selectedCategory={selectedCategory}
        search={search} 
        onItemFormSubmit={onItemFormSubmit}/>
        <Filter onCategoryChange={handleCategoryChange} 
                search={search} 
                // onSearchChange={setNameSearch((event)=> event.target.value)} 
                onSearchChange={handleNameChange} />
        <ul className="Items">
          {itemsToDisplay.map((item) => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}  
export default ShoppingList;
