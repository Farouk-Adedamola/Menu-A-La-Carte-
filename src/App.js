import React, { useState } from "react";
import "./App.css";
// data
import items from "./data";
// categories
import MenuItems from "./Items";
import Categories from "./Categories";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const itemCategory = items.filter((item) => item.category === category);
    setMenuItems(itemCategory);
  };

  return (
    <>
      <div className="container">
        <div className="menu">
          <h1 className="title">Our Menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <div className="inner-section">
          <MenuItems items={menuItems} />
        </div>
      </div>
    </>
  );
}

export default App;
