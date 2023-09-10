import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from './Card';

const ContentImg = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 20px;
`;

interface data {
  id?: number;
  title?: string;
  mainImg?: string;
  text?: string;
}

const ContentText = styled.p`
  font-weight: 400;
  text-align: center;
`;

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
        <ContentImg src={mainImg} alt="imageContent" />
        <ContentText>{text}</ContentText>
      </Card>
    </>
  );
};

export default Post;
