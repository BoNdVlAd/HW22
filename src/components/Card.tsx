import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  height: 100%;
  width: 70%;
  border: 2px solid #566573;
  margin: 0 auto;
  border-radius: 25px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  a {
    text-decoration: none;
    color: inherit;
  }
  @media only screen and (max-width: 1024px) {
    width: 90%;
  }
`;

const Card = ({ children }: any) => {
  return (
    <>
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default Card;
