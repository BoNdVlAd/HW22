import React from 'react';
import { useParams } from 'react-router-dom';
import FullPost from '../components/FullPost';
import Hello from '../components/Hello';

const Project = () => {
  const id = useParams();
  return (
    <>
      <FullPost key={id} id={id.projectId} />
    </>
  );
};

export default Project;
