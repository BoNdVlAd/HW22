import React from 'react';
import Card from './Card';
import projects from '../assets/projects.json';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const ContentImg = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

const FullPost = (params: any) => {
  const [t, i18n] = useTranslation();
  let PROJECTS: any = t('projects', { returnObjects: true });
  // PROJECTS = [...PROJECTS];

  console.log('fuck', PROJECTS[0]);

  const project = PROJECTS.filter((e: any) => e.id === Number(params.id));
  return (
    <>
      <Card>
        <h2>{project[0].title}</h2>
        {project[0].imgs &&
          project[0].imgs.map((e: any) => (
            <div>
              <ContentImg src="/images/project1/Capture.PNG" alt="" />
            </div>
          ))}
      </Card>
    </>
  );
};

export default FullPost;
