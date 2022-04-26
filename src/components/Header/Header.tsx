import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import IconLogo from '../../assets/sparky-beta-logo.svg';

interface HeaderProps {
  isScrolling: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolling }) => {
  console.log('isScrolling', isScrolling);
  return (
    <HeaderContainer isScrolling={isScrolling}>
      <div className="headerwrap">
        <div className="headerwrap__logo">
          <img src={IconLogo} alt="logo" />
        </div>
        <div className="headerwrap__menu">
          <ul>
            <li> Home </li>
            <li> 고민 나누기 </li>
            <li> 스파키 소개 </li>
            <li> 미리보기</li>
            <li> 게임 방법 </li>
            <li> FAQ </li>
            <li> 실시간 랭킹 </li>
          </ul>
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
  align-items: center;
  justify-content: center;
  .headerwrap {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, ${({ isScrolling }) => (isScrolling ? 1 : 0)});
    width: 100%;
    height: 100%;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;

    &:div span {
      display: inline-block;
      opacity: 1;
    }
  }

  .headerwrap__logo {
    margin: 15px;
    width: 64px;
    opacity: ${({ isScrolling }) => (isScrolling ? 1 : 0)};
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }

  .headerwrap__menu {
    margin: auto;
  }

  .headerwrap__menu ul {
    list-style: none;
  }

  .headerwrap__menu ul li {
    margin: 10px 5px;
    float: left;
  }

  .fixed {
  }
`;

export default Header;
