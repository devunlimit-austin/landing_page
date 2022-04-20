import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

function App() {
  const [isScrolling, setScrolling] = useState(false);
  // useEffect(() => {
  //   window.addEventListener('scroll', onScrollHandler);
  //   return () => window && window.removeEventListener('scroll', onScrollHandler);
  // }, []);

  const onScrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const scrollTop: number = event.currentTarget.scrollTop;
    console.log('!!!', scrollTop);

    if (scrollTop > 860) {
      setScrolling(true);
    } else setScrolling(false);
  };
  return (
    <div onScroll={onScrollHandler}>
      <Fixed isScrolling={isScrolling}>
        <div className="bg transition"></div>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </Fixed>
      <div style={{ height: '3000px' }}> </div>
    </div>
  );
}

interface StyledFixedProps {
  isScrolling: boolean;
}

const Fixed = styled.div<StyledFixedProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;

  ul {
    height: 200px;
    margin: -70px auto 0 auto;
    width: 500px;
  }

  li {
    float: left;
    list-style: none;
    margin: 10px 20px;
    text-transform: uppercase;
    letter-spacing: 4px;
    color: #000;
  }

  .bg {
    background: #000;
    width: 100%;
    height: 100px;
    opacity: ${({ isScrolling }) => (isScrolling ? 0.4 : 0)};
  }

  .transition {
    -webkit-transition: all 1s ease-in-out;
    -moz-transition: all 1s ease-in-out;
    -o-transition: all 1s ease-in-out;
    transition: all 1s ease-in-out;
  }

  .show {
  }
`;

export default App;
