import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../store/languageSlice';

const Wrapper = styled.div`
  max-width: 120px;
  position: relative;
  user-select: none;
`;

const Choosed = styled.div`
  cursor: pointer;
  background-color: #fff;
  width: 100%;
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    transform: rotate(90deg);
    transition: all ease 0.3s;
    &.active {
      transform: rotate(0deg);
    }
  }
`;

const Content = styled.div`
  position: absolute;
  top: 110%;
  padding: 15px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.6);
  font-weight: bold;
  color: #333;
  width: 92.5%;
  border-radius: 10px;
  transition: all ease 0.3s;
  transform: translateY(-50px);
  opacity: 0;

  &.active {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const Item = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f4f4f4;
  }
`;

const LanguageChanger = ({ changleLanguage }: any) => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state: any) => state.language.language);
  const [isActive, setIsActive] = React.useState(false);
  const contentRef = React.useRef<any>(null);
  const wrapperRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (localStorage.getItem('language')) {
      dispatch(setLanguage(localStorage.getItem('language')));
    }
  }, []);

  const handleClickOutside = (e: any) => {
    if (contentRef.current && wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsActive(!isActive);
    }
  };

  function handleActive() {
    setIsActive(!isActive);
    setTimeout(() => {
      if (contentRef.current) {
        if (!isActive) {
          contentRef.current.classList.add('active');
        } else {
          contentRef.current.classList.remove('active');
        }
      }
    });
  }
  function handleSelect(e: string) {
    localStorage.setItem('language', e);
    dispatch(setLanguage(e));
    setIsActive(false);
  }

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const languages = ['English', 'Ukrainian'];

  return (
    <>
      <Wrapper ref={wrapperRef}>
        <Choosed onClick={handleActive}>
          {currentLanguage}
          {currentLanguage === 'English' ? (
            <span className="fi fi-gb"></span>
          ) : (
            <span className="fi fi-ua"></span>
          )}

          <svg
            className={isActive ? 'active' : ''}
            height="30px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="20px">
            <path d="M98.9,184.7l1.8,2.1l136,156.5c4.6,5.3,11.5,8.6,19.2,8.6c7.7,0,14.6-3.4,19.2-8.6L411,187.1l2.3-2.6  c1.7-2.5,2.7-5.5,2.7-8.7c0-8.7-7.4-15.8-16.6-15.8v0H112.6v0c-9.2,0-16.6,7.1-16.6,15.8C96,179.1,97.1,182.2,98.9,184.7z" />
          </svg>
        </Choosed>
        {isActive && (
          <Content ref={contentRef}>
            {languages.map((e) => (
              <Item onClick={() => handleSelect(e)} key={e}>
                {e}
              </Item>
            ))}
          </Content>
        )}
      </Wrapper>
      {/* <span className="fi fi-ua"></span>
      <Selection onChange={(e) => changleLanguage(e.target.value)}>
        <span className="fi fi-ua"></span>
        <Option value="en">
          <span className="fi fi-ua"> English</span>
        </Option>
        <Option value="ukr">Ukrainian</Option>
      </Selection> */}
    </>
  );
};

export default LanguageChanger;
