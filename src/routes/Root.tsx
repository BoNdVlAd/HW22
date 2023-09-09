import React from 'react';
import { styled } from 'styled-components';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Header from './../components/Header';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  padding: 20px 10px;
  flex: 1 1 auto;
  background-color: #e5e7e9;
  margin-top: 80px;
  @media only screen and (max-width: 1024px) {
    margin-top: 58px;
  }
`;

const Footer = styled.div`
  flex: 0 1 45px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #566573;
  color: #fff;
  font-size: 18px;
`;

const Root = () => {
  const [t, i18n] = useTranslation();

  const changleLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Flex>
        <Header />
        <Main>
          <div id="detail">
            <Outlet />
          </div>
        </Main>
        <Footer>All rights reserved</Footer>
      </Flex>
    </>
  );
};

export default Root;
