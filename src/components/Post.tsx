import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';

const ContentImg = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

interface data {
  id?: number;
  title?: string;
  mainImg?: string;
  text?: string;
}

const Title = styled.h2`
  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
`;

const Post = (props: data) => {
  const { id, title, mainImg, text } = { ...props };
  return (
    <>
      <Card>
        <Link to={`${id}`}>
          <Title>{title}</Title>
        </Link>
        <p>{text}</p>
        <ContentImg src={mainImg} alt="imageContent" />
      </Card>
    </>
  );
};

export default Post;
