import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

function App() {
  const [isScrolling, setScrolling] = useState(false);
  useEffect(() => {
    const win: Window = window;
    win.addEventListener('scroll', onScrollHandler);

    return () => window.removeEventListener('scroll', onScrollHandler);
  }, []);

  const onScrollHandler = (event: Event) => {
    const scrollTop: number = document.documentElement.scrollTop;

    if (scrollTop > 860) {
      setScrolling(true);
    } else setScrolling(false);
  };
  return (
    <Container isScrolling={isScrolling}>

      <div className='header'> <div className="fixed" >
        <div className="headerBg transition"></div>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </div> </div>
     
      <div className="content1">
        <div className='text1'>  
               <h2
                  className="heading"
                >
               하이
                </h2>
        </div>
        <div className="bg1">
        <video className="video" controls muted autoPlay loop>
          <source src="/thumb.webm" type="video/webm"/>
          <source src="/thumb.mp4" type="video/mp4" />
        </video>
        </div>
        <div className="gradient"></div>
      </div>
      <div style={{ width:"100%", height: '600px',backgroundColor:"blue" }}> </div>
      <div className='buttonWrapper'> 
        <div className="button">
          <span> 버튼 </span>
        </div>
      </div>
    </Container>
  );
}

interface StyledContainerProps {
  isScrolling: boolean;
}

const Container = styled.div<StyledContainerProps>`
  display: block;


  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;

  }

  ul {
    height: 200px;
    margin: -70px auto 0 auto;
    width: 500px;
  }

  li {
    width: 100wh;
    float: left;
    list-style: none;
    margin: 10px 20px;
    text-transform: uppercase;
    letter-spacing: 4px;
    background: linear-gradient(90deg, #ffcd1a, #ce0025);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: Gradient 3s ease infinite;
    -moz-animation: Gradient 3s ease infinite;
    animation: Gradient 3s ease infinite;
  }

  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .header {
    height: 90px;
  }

  .buttonWrapper {
    box-sizing: border-box;
    position: fixed;
    bottom: 5%;
    left: 50%;
  }
  
  .text1 {
    position: absolute;
    z-index: 2;
    top:25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .heading {
    
    
    color:#fff;
      font-size: 48px;
      font-weight: 700;
      line-height: 1.3;

    }

  
  .headerBg {
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

  .content1{
    position: relative;
    overflow:auto; 
    height:600px;


  }

  .bg1 {
    width: 100%;
    height: 100%;
    color: transparent;
    /* background: url('https://www.devunlimit.com/assets/images/main-1.jpg');

    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover; */

  }
  .video {
    width: 150%;
    height: auto;
  }
  .gradient {
    position: absolute;
    z-index: 5;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 121.51px;
    background: linear-gradient(180deg, rgba(255, 254, 254, 0) 30%, rgba(255, 254, 254, 0.6) 85%  ,#FFFFFF 100%);
  }
  `;




export default App;
