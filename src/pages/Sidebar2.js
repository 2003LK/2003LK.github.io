import React from "react";

const Sidebar = ({ items, selectedItem, onSelect }) => {
  return (
    <div className="sidebar">
      <ul>
        {items.map((item) => (
          <li
            key={item}
            className={item === selectedItem ? "active" : ""}
            onClick={() => onSelect(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;