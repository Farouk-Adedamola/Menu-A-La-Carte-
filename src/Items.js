import React from "react";
// css
import "./Items.css";

const MenuItems = ({ items }) => {
  return (
    <>
      <div className="inner-section">
        {items.map((each) => {
          const { id, title, price, img, desc } = each;
          return (
            <>
              <div key={id} className="list">
                <img src={img} alt="" className="img" />
                <header className="header">
                  <h4 className="menu-title">{title}</h4>
                  <h5 className="price"> #{price}</h5>
                </header>
                <p className="desc">{desc}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuItems;
