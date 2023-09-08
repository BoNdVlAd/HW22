import React from 'react';
import Card from './Card';
import projects from '../assets/projects.json';
import styled from 'styled-components';

const ContentImg = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

const FullPost = (params: any) => {
  console.log('params', params);
  console.log(projects.projects);
  const project = projects.projects.filter((e) => e.id === Number(params.id));
  console.log('project : ', project);
  return (
    <>
      <Card>
        <h2>{project[0].title}</h2>
        {project[0].imgs &&
          project[0].imgs.map((e) => (
            <div>
              <ContentImg src="/images/project1/Capture.PNG" alt="" />
            </div>
          ))}
      </Card>
    </>
  );
};

export default FullPost;
