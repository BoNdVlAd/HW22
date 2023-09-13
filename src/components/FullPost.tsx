import React from 'react';
import Card from './Card';
import projects from '../assets/projects.json';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ContentImg = styled.img`
  max-width: 100%;
  max-height: 400px;
  cursor: pointer;
  transition: all ease 0.3s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 20px;
  &:hover {
    transform: scale(1.3);
  }
`;

const Back = styled.button`
  z-index: 100;
  border: none;
  background-color: transparent;
  position: absolute;
  left: 1rem;
  top: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transform: scale(2);
  justify-content: center;
  &:hover {
    opacity: 0.5;
  }
  @media only screen and (max-width: 1024px) {
    top: 2rem;
    left: -0.5rem;
  }
`;

const Title = styled.h2`
  width: 100%;
  font-size: 26px;
  font-weight: 600;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    background-color: #2b303a;
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const SubTitle = styled.p`
  font-size: 26px;
  font-weight: 500;
  text-align: center;
`;

const Links = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 0 20px;
  a {
    font-size: 18px;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const ScreenShots = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
`;

const Description = styled.p`
  width: 100%;
  text-align: left;
`;

const FullPost = (params: any) => {
  const [t, i18n] = useTranslation();
  let PROJECTS: any = t('projects', { returnObjects: true });
  const project = PROJECTS.filter((e: any) => e.id === Number(params.id));
  console.log(project[0]);
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
        <Title>{project[0].title}</Title>
        <SubTitle>Description</SubTitle>
        <Description>{project[0].description}</Description>
        <SubTitle>Screenshots</SubTitle>
        <ScreenShots>
          {project[0].imgs.map((e: string) => {
            return <ContentImg src={`/${e}`} alt="" />;
          })}
        </ScreenShots>
        <SubTitle>Links</SubTitle>
        <Links>
          <a href={project[0].links.github}>GitHub</a>
          <a href={project[0].links.link}>Link to project</a>
        </Links>
      </Card>
    </>
  );
};

export default FullPost;
