import React from 'react';
import styled from 'styled-components';

const BackBlock = styled.div``;

const Wrapper = ({ children }: any) => {
  return (
    <>
      <BackBlock>{children}</BackBlock>
    </>
  );
};

export default Wrapper;
