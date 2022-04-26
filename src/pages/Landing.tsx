import React, { useState, useEffect, useCallback, useRef, UIEvent } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useIntl } from 'react-intl';
import IconLogo from '../assets/sparky-beta-logo.svg';

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
  const [isExpandedDropdown, setExpandedDropdown] = useState<boolean>(false);

  useEffect(() => {}, []);
  useEffect(() => {
    console.log('isExpandedDropdown', isExpandedDropdown);
  }, [isExpandedDropdown]);

  const handleUIEvent = (e: UIEvent<HTMLDivElement>) => {
    const scrollTop: number = e.currentTarget.scrollTop;

    if (scrollTop > 860) {
      setScrolling(true);
    } else setScrolling(false);
  };

  const fnSetExpanded = () => {
    setExpandedDropdown(!isExpandedDropdown);
  };

  return (
    <Container onScroll={handleUIEvent} isScrolling={isScrolling}>
      <Header isScrolling={isScrolling} />
      <section className="content1">
        <div className="content1__descriptionWrap">
          <div className="content1__logo">
            <img src={IconLogo} alt="smile" />
          </div>
          <div>
            <h1
              className="content1__descriptionSentence"
              dangerouslySetInnerHTML={{
                __html: f(
                  { id: 'landing.description' },
                  {
                    game: `<span class="highlight">${f({
                      id: 'landing.description.game',
                    })}</span>`,
                  },
                ),
              }}
            />
          </div>
          <div className="content1__button">
            <span className="content1__buttontext">스파키 둘러보기</span>
          </div>
        </div>
        <div className="bg1">
          <video className="video" playsInline muted autoPlay loop>
            <source src="/thumb.webm" type="video/webm" />
            <source src="/thumb.mp4" type="video/mp4" />
          </video>
          <div className="gradient"></div>
        </div>
      </section>

      <section className="content2">
        <div>
          <p
            className="content2__descriptionSentence"
            dangerouslySetInnerHTML={{
              __html: f(
                { id: 'landing.section2.description' },
                {
                  dropdown: `<span class="content2__highlight" >${f({
                    id: 'landing.section2.description.exercise',
                  })}</span> `,
                },
              ),
            }}
          />
        </div>
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
      </section>
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

interface ContainerProps {
  isScrolling: boolean;
}

const Container = styled.div<ContainerProps>`
  display: block;
  overflow: auto;
  height: 100vh;
  background: #fff;
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

  .highlight {
    color: #8100ff;
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
    align-items: center;
    justify-content: center;
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
    padding-top: 15px;
    text-align: center;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 26.221px;
    line-height: 130%;
    letter-spacing: 0.01em;
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
    max-width: 1920px;
    margin: 50px 250px;
  }

  .content2 .blur {
    z-index: 1;
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

  .content2__angledown {
    color: #8100ff;
  }

  .content2__descriptionSentence {
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.01em;
    color: #000000;
    white-space: nowrap;
  }

  .content2__highlight {
    width: 365px;
    height: 72px;
    padding: 12.75px 40px;
    background: #f9f5ff;
    border: 0.750066px solid #e4e4e4;
    box-sizing: border-box;
    border-radius: 78.7569px;
    font-style: normal;
    font-weight: 700;
    font-size: 36.0032px;
    text-align: center;
    letter-spacing: 0.01em;
    color: #8100ff;
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

  .content__logo {
    opacity: ${({ isScrolling }) => (isScrolling ? 1 : 0)};
  }

  .content1__descriptionSentence {
    font-size: 60px;
    font-weight: 700;
  }

  .content1__descriptionWrap {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
    position: absolute;
    text-align: end;
    z-index: 2;
    top: 295px;
    right: 10%;
    height: 547px;
  }
  .content1__descriptionSentence {
    font-size: 60px;
    font-weight: 700;
  }

  .content1__button {
    position: relative;
    width: 348px;
    height: 82px;
    background: #8100ff;
    border-radius: 42.6852px;
    text-align: center;
    justify-content: space-around;
  }

  .content1__buttontext {
    line-height: 82px;
    color: #fff;
    font-family: Roboto;
    font-size: 28px;
    font-weight: 700;
  }

  .content1 {
    position: relative;
    overflow: hidden;
    height: 953px;
  }

  .bg1 {
    position: relative;
    height: 100%;
  }
  .video {
    position: absolute;
    transform: scale(1.5, 1.5);
  }
  .gradient {
    position: absolute;
    z-index: 5;
    bottom: 0%;
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
