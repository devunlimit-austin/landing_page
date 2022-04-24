import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

interface sample {
  desc: string;
  like: number;
  emoji: string;
}

const SampleData: sample[] = [
  {
    desc: '하하하',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호<br>aa',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호호호호호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호호호호호호호호호호호호호호호호호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호',
    like: 123,
    emoji: '😒',
  },
  {
    desc: '호호호',
    like: 123,
    emoji: '😒',
  },
];

const Landing: React.FC = () => {
  const [isScrolling, setScrolling] = useState(false);
  useEffect(() => {
    const win: Window = window;
    win.addEventListener('scroll', onScrollHandler);

    console.log('SampleData', SampleData);

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
      <div className="content1">
        <div className="text1">
          <h2 className="heading">하이</h2>
        </div>
        <div className="bg1">
          <video className="video" playsInline muted autoPlay loop>
            <source src="/thumb.webm" type="video/webm" />
            <source src="/thumb.mp4" type="video/mp4" />
          </video>
          <div className="gradient"></div>
        </div>
      </div>
      <div className="content2">
        <div></div>
        <ul>
          {SampleData.map((_, idx) => (
            <li>
              <div className="desc" key={idx}>
                <div>
                  <p>{_.desc}</p>
                </div>
                <div>
                  <span>{_.emoji}</span>
                  <span>{_.like}명이 공감함</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div></div>
        </div>
      </div>
      <div className="buttonWrapper">
        <div className="button">
          <span> 버튼 </span>
        </div>
      </div>
    </Container>
  );
};

interface StyledContainerProps {
  isScrolling: boolean;
}

const Container = styled.div<StyledContainerProps>`
  display: block;
  overflow: auto;
  height: 100vh;

  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
  }

  // ul {
  //   height: 200px;
  //   margin: -70px auto 0 auto;
  //   width: 500px;
  // }

  .section2 {
  }

  .desc {
    display: inline-block;
    position: relative;
    background: #ffffff;
    height: 72px;
    border: 0.56003px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 58.8031px;
    padding: 13px 35px 13px;
    text-align: center;
    margin-bottom: 21px;
  }
  .desc:hover:after {
    background: rgba(129, 0, 255, 0.8);
    border-radius: 78.6629px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #fff;
    padding-top: 30px;
    content: '공감하기';
  }

  //   .content2 ul li:nth-of-type(1) {
  //   paddingLeft 1
  // }
  // .content2 div:nth-of-type(4n + 1) {
  //   width: 100px;
  // }
  // .content2 div:nth-of-type(4n + 2) {
  //   width: 150px;
  // }

  // .content2 div:nth-of-type(4n + 3) {
  //   width: 200px;
  // }
  // .content2 div:nth-of-type(4n + 4) {
  //   width: 250px;
  // }
  .content2 ul li:nth-of-type(4n + 1) {
    text-align: center;
    margin-right: 160px;
  }
  .content2 ul li:nth-of-type(4n + 2) {
    text-align: center;
    margin-right: 120px;
  }
  .content2 ul li:nth-of-type(4n + 3) {
    text-align: center;
    margin-right: 190px;
  }
  .content2 ul li:nth-of-type(4n + 4) {
    text-align: center;
    margin-right: 150px;
  }

  // li {
  //   width: 100wh;
  //   float: left;
  //   list-style: none;
  //   margin: 10px 20px;
  //   text-transform: uppercase;
  //   letter-spacing: 4px;
  //   background: linear-gradient(90deg, #ffcd1a, #ce0025);
  //   background-size: 400% 400%;
  //   -webkit-background-clip: text;
  //   -webkit-text-fill-color: transparent;
  //   -webkit-animation: Gradient 3s ease infinite;
  //   -moz-animation: Gradient 3s ease infinite;
  //   animation: Gradient 3s ease infinite;
  // }

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
    background: #8100ff;
    box-shadow: 0px 0px 12.8px rgba(0, 0, 0, 0.08);
    border-radius: 72.843px;
    box-sizing: border-box;
    position: fixed;
    bottom: 5%;
    left: 50%;
  }

  .text1 {
    position: absolute;
    z-index: 2;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .heading {
    color: #fff;
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

  .content1 {
    position: relative;
    overflow: hidden;
    height: 970px;
    background-color: ;
  }

  .bg1 {
    position: relative;
    height: 100%;
  }
  .video {
    position: absolute;
    top: -24%;
    left: -164%;
    transform: scale(0.5, 0.5);
  }
  .gradient {
    position: absolute;
    z-index: 5;
    left: 0%;
    bottom: 12%;
    width: 100%;
    height: 121.51px;
    background: linear-gradient(
      180deg,
      rgba(255, 254, 254, 0) 0%,
      rgba(255, 255, 255, 0.53) 39.58%,
      rgba(255, 255, 255, 0.92) 71.87%,
      #ffffff 100%
    );
  }
`;

export default Landing;
