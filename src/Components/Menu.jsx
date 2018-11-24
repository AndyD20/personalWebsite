import React from 'react';
import MenuItem from "./MenuItem";

const Menu = () => {
  return (
    <div className="container pl-0 pr-0 h-100 Bg-Bone border-right border-dark ">
      <table className="text-right w-100 ">
        <tbody>
          <MenuItem path="Home" firstEntry={true}/>
          <MenuItem path="Entries" />
          <MenuItem path="About" lastEntry={true}/>
        </tbody>
      </table>
    </div>
  )
};

export default Menu;