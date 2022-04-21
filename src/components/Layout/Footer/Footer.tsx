import React, { useState, useEffect, useCallback } from 'react';

interface Props {
    isSidebarFloated: boolean;
    isSidebarMinimized: boolean;
    expander?: (visibility: boolean) => void;
  }

const Footer: React.FC<Props> = ({ isSidebarFloated, isSidebarMinimized, expander }) => {
    return null;
};

export default Footer;
