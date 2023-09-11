import React from 'react';
import Card from './Card';
import projects from '../assets/projects.json';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ContentImg = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

const Back = styled.button`
  width: 60px;
  height: 60px;
  border: none;
  background-color: transparent;
  position: absolute;
  left: 1rem;
  top: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transform: scale(2);
  justify-content: center;
  &:hover {
    opacity: 0.5;
  }
`;

const SubTitle = styled.p`
  font-size: 26px;
  font-weight: 500;
`;

const FullPost = (params: any) => {
  const [t, i18n] = useTranslation();
  let PROJECTS: any = t('projects', { returnObjects: true });
  const project = PROJECTS.filter((e: any) => e.id === Number(params.id));
  return (
    <>
      <Card>
        <Back>
          <Link to={'/projects'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z" />
              <path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z" />
            </svg>
          </Link>
        </Back>
        <h2>{project[0].title}</h2>
        <SubTitle>Links</SubTitle>
      </Card>
    </>
  );
};

export default FullPost;
