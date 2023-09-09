import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { styled } from 'styled-components';
import { Translation, useTranslation } from 'react-i18next';
import LanguageChanger from './LanguageChanger';

const Flex = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding-top: 15px;
  }
`;

const Logo = styled.p`
  font-family: 'Dancing Script', cursive;
  padding: 0 0 0 20px;
  margin: 0;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  user-select: none;
  justify-self: start;
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const Navigation = styled.nav`
  position: fixed;
  min-height: 80px;
  background-color: #2b303a;
  display: grid;
  grid-auto-columns: 1fr 10fr;
  grid-auto-flow: column;
  align-items: center;

  a {
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    color: #fff;
    transition: all ease 0.3s;
    padding: 0px 45px;
    position: relative;
    &:not(:last-child):after {
      content: '';
      display: block;
      width: 1.5px;
      height: 150%;
      background: #fff;
      right: 0;
      top: -25%;
      position: absolute;
      pointer-events: none;
    }

    &:hover {
      color: #808389;
    }
    &.active {
      text-decoration: underline;
    }
  }
  @media only screen and (max-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #2b303a;
    transition: all ease 0.3s;
    transform: translateY(-100vh);
    z-index: 100;
    a {
      width: 50%;
      text-align: center;
      &:not(:last-child):after {
        content: '';
        display: none;
      }
      &:not(:first-child):after {
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background: #fff;
        right: 0;
        top: -25%;
        position: absolute;
        pointer-events: none;
      }
    }
  }
  &.responsiveNav {
    transform: none;
  }
`;

const NavBtn = styled.button`
  width: 100%;
  color: #fff;
  font-size: 1.8rem;
  background-color: #2b303a;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: 0;
  display: none;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  position: fixed;

  @media only screen and (max-width: 1024px) {
    opacity: 1;
    display: flex;
  }
`;
const CloseNavBtn = styled.button`
  color: #fff;
  background: transparent;
  border: none;
  opacity: 0;
  outline: none;
  cursor: pointer;
  padding: 20px;
  display: none;
  font-size: 1.8rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
  z-index: 999;

  @media only screen and (max-width: 1024px) {
    opacity: 1;
    display: block;
  }
`;

const Header = () => {
  //languages
  const [t, i18n] = useTranslation();

  const changleLanguage = (language: any) => {
    console.log('CHANGE to', language);
    i18n.changeLanguage(language);
  };

  const navRef = React.useRef<HTMLElement>(null);
  const navigate = useNavigate();
  console.log(t('pages.title1'));

  const links = ['projects', 'stack'];

  const pages: string[] = t('pages', { returnObjects: true });

  const [active, setActive] = React.useState(0);

  const showNavigation = () => {
    if (navRef.current) {
      navRef.current.classList.toggle('responsiveNav');
    }
  };

  React.useEffect(() => {
    const path = window.location.pathname.split('/')[1];
    if (path) {
      setActive(pages.indexOf(path));
    } else {
      navigate('projects');
    }
  }, []);

  const handleNavigation = (index: number) => {
    setActive(index);
    showNavigation();
  };

  return (
    <>
      <Navigation ref={navRef}>
        <Logo>BOND_PORTFOLIO</Logo>
        <Flex>
          {pages.map((e, index) => (
            <Link
              className={active === index ? 'active' : ''}
              onClick={() => handleNavigation(index)}
              to={links[index]}>
              {e}
            </Link>
          ))}
        </Flex>
        <CloseNavBtn onClick={showNavigation}>
          <FaTimes />
        </CloseNavBtn>
        <LanguageChanger changleLanguage={(value: string) => changleLanguage(value)} />
      </Navigation>

      <NavBtn>
        <Logo>BOND_PORTFOLIO</Logo>
        <FaBars onClick={showNavigation} />
      </NavBtn>
    </>
  );
};

export default Header;
