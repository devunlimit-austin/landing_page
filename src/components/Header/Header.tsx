import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  isScrolling: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolling }) => {
  console.log('isScrolling', isScrolling);
  return (
    <HeaderContainer isScrolling={isScrolling}>
      <div className="bg">
        <div></div>
        <div>
          <span> Home </span>
          <span> 고민 나누기 </span>
          <span> 스파키 소개 </span>
          <span> 미리보기</span>
          <span> 게임 방법 </span>
          <span> FAQ </span>
          <span> 실시간 랭킹 </span>
        </div>
        <div></div>
      </div>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<HeaderProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

  height: 90px;
  z-index: 999;

  .bg {
    background: rgba(255, 255, 255, ${({ isScrolling }) => (isScrolling ? 1 : 0)});
    width: 100%;
    height: 100%;
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;

    &:div span {
      display: inline-block;
      opacity: 1;
    }
  }

  .fixed {
  }
`;

export default Header;
