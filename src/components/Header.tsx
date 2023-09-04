import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { styled } from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  a {
    color: red;
  }
`;

const Logo = styled.p`
  font-family: 'Dancing Script', cursive;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  user-select: none;
  justify-self: start;
`;

const Navigation = styled.nav`
  min-height: 80px;
  background-color: #2b303a;
  display: grid;
  grid-auto-columns: 1fr 10fr;
  grid-auto-flow: column;
  align-items: center;
  padding: 0px 20px;
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
    a {
      font-size: 24px;
      padding: 20px 0;
      &:not(:first-child):after {
        content: '';
        display: block;
        width: 1rem;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 1.5px;
        background: #fff;

        top: 0px;
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
  color: #fff;
  font-size: 1.8rem;
  background-color: #2b303a;
  border: none;
  opacity: 0;
  outline: none;
  cursor: pointer;
  padding: 5px;
  display: none;
  justify-content: right;
  align-items: center;
  padding: 10px;
  user-select: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;

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
  const navRef = React.useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const pages: string[] = ['projects', 'stack', 'hello'];
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
              to={e}>
              {e}
            </Link>
          ))}
        </Flex>
        <CloseNavBtn onClick={showNavigation}>
          <FaTimes />
        </CloseNavBtn>
      </Navigation>
      <NavBtn>
        <FaBars onClick={showNavigation} />
      </NavBtn>
    </>
  );
};

export default Header;
