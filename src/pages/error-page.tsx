import React from 'react';
import { useRouteError } from 'react-router';
import styled from 'styled-components';

const Flex = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ErrorPage = () => {
  const error: any = useRouteError();
  console.log(error);

  return (
    <Flex>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Flex>
  );
};

export default ErrorPage;
