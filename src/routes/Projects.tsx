import React from 'react';
import styled from 'styled-components';
import Wrapper from './../components/Wrapper';
import Post from '../components/Post';
import projects from '../assets/projects.json';

const Projects = () => {
  console.log(projects.projects);
  return (
    <>
      <Wrapper>
        {projects.projects.map((e) => (
          <Post {...e} />
        ))}
      </Wrapper>
    </>
  );
};

export default Projects;
