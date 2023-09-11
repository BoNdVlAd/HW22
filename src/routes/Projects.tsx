import React from 'react';
import styled from 'styled-components';
import Wrapper from './../components/Wrapper';
import Post from '../components/Post';
import projects from '../assets/projects.json';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [t, i18n] = useTranslation();
  const PROJECTS: any = t('projects', { returnObjects: true });

  return (
    <>
      <Wrapper>
        {[...PROJECTS].map((e) => (
          <Post {...e} />
        ))}
      </Wrapper>
    </>
  );
};

export default Projects;
