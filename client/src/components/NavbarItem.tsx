import React from 'react';

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    <a>
      {title}
    </a>
  </li>
);

export default NavBarItem;