import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const isActive = (location, lastElem) => {
  let returnVal = "";
  if (window.location.pathname === location) {
    returnVal = "table-active";
  }

  if(!lastElem){
    returnVal += " border-bottom border-dark"
  }
  return returnVal;
};

const MenuItem = ({path, firstEntry, lastEntry}) => {
  return (
    <tr className={isActive("/" + path, lastEntry)}>
      <td>
        <Link to={"/" + path} className={`mw-100 pr-5 pb-3 ${firstEntry ? "pt-5" : "pt-3"} Menu-Item Text-Black`}>{path}</Link>
      </td>
    </tr>
  )
};

MenuItem.propTypes = {
  path: PropTypes.string,
  firstEntry: PropTypes.bool,
  lastEntry: PropTypes.bool
};

export default MenuItem;