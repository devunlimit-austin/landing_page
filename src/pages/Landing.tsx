import React, { useState, useEffect, useCallback, useRef, UIEvent } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from 'react-intl';

import { Header, Footer } from '../components';

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
  const { formatMessage: f, locale } = useIntl();
  const [isScrolling, setScrolling] = useState<boolean>(false);

  // useEffect(() => {
  //   const win: Window = window;
  //   win.addEventListener('scroll', onScrollHandler);
  //   return () => window.removeEventListener('scroll', onScrollHandler);
  // }, []);

  const handleUIEvent = (e: UIEvent<HTMLDivElement>) => {
    const scrollTop: number = e.currentTarget.scrollTop;

    if (scrollTop > 860) {
      setScrolling(true);
    } else setScrolling(false);
  };

  // const onScrollHandler = (event: Event) => {

  // };

  return (
    <Container onScroll={handleUIEvent}>
      <Header isScrolling={isScrolling} />
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
        <div className="blur"></div>
        <ul>
          {SampleData.map((_, idx) => (
            <li key={idx}>
              <div className="desc">
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
          <div className={'TextAreaWrap'}>
            <TextareaAutosize
              minRows={1}
              maxRows={1}
              className="TextArea"
              placeholder={'해당되는 항목이 없다면 여기에 직접 입력해서 고민을 나눠보세요!'}
              maxLength={50}
              onKeyPress={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                if (e.key === 'Enter') e.preventDefault();
              }}
            />
            <FontAwesomeIcon className="arrow-up" icon={['fas', 'arrow-up']} />
          </div>
        </div>
      </div>
      <div className="content1"></div>
      <div className="buttonWrapper">
        <div className="button">
          <span> 버튼 </span>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: block;
  overflow: auto;
  height: 100vh;
  background: #f5f6f8;
  font-family: 'Poppins', 'Noto Sans CJK KR', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

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
    text-align: left;
    margin-right: 5px;
    margin-right: 25px;
    margin-bottom: 25px;
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
    text-align: center;
    content: '공감하기';
  }

  .TextAreaWrap {
    display: flex;
    position: relative;
    margin: 0px 17px 0px;
  }

  .TextArea {
    flex: 8;
    border-radius: 78.6629px;
    padding: 15px 50px 15px 30px;
    width: 100%;
    height: 63px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    border: none;
    resize: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.01em;
    border: 0.75px solid #565656;
    outline: 0.75px solid #565656;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    &:focus + .arrow-up {
      color: #6b1ce4;
    }
    &:placeholder {
      color: #b6b7b8;
    }
  }

  .content2 {
    position: relative;
  }

  .content2 .blur {
    z-index: 0;
    position: absolute;
    width: 633px;
    height: 633px;
    left: 0;
    transform: translate(-50%, 0);
    background: #faf5ff;
    filter: blur(375.033px);
  }

  .content2 .arrow-up {
    color: #b6b7b8;
    flex: 2;
    position: absolute;
    right: 50px;
    top: 50%;
    transform: translate(0, -50%);
  }
  .content2 ul {
    text-align: center;
  }
  .content2 ul li {
    display: inline-block;
    z-index: 2;
  }

  /* .content2 ul li:nth-of-type(4n + 1) {
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
  } */

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

  .content1 {
    position: relative;
    overflow: hidden;
    height: 970px;
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
