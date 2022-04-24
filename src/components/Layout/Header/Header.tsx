import React, { useState, useEffect, useCallback } from 'react';

interface Props {
  isSidebarFloated: boolean;
  isSidebarMinimized: boolean;
  expander?: (visibility: boolean) => void;
}

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="fixed">
        <div className="headerBg transition"></div>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
