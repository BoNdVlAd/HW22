import React from 'react';
import styled from 'styled-components';

const BackBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Wrapper = ({ children }: any) => {
  return (
    <>
      <BackBlock>{children}</BackBlock>
    </>
  );
};

export default Wrapper;
