import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  height: 100%;
  max-width: 1200px;
  border: 2px solid #566573;
  margin: 0 auto;
  border-radius: 25px;
  background-color: #fff;
`;

const Container = ({ children }: any) => {
  return (
    <>
      <Wrapper>
        <div>{children}</div>
      </Wrapper>
    </>
  );
};

export default Container;
