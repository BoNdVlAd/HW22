import React from 'react';

import Typed from 'react-typed';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.p`
  font-size: 52px;
  width: 60rem;
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 20px;
`;
const Stack = () => {
  const technologies = [
    'HTML (HyperText Markup Language)',
    'CSS (Cascading Style Sheets)',
    'JavaScript',
    'React',
    'TypeScript',
    'Tailwind',
    'styled-components',
  ];

  return (
    <>
      <Wrapper>
        <span></span>
        <Text>
          <span>{`myStack: {`}</span>
          <div style={{ paddingLeft: '40px' }}>
            <Typed
              loop
              strings={[...['my stack '], ...technologies]}
              backSpeed={95}
              typeSpeed={95}
            />

            {/* <Typed
            strings={['Search for products', 'Search for categories', 'Search for brands']}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop>
            <input type="text" />
          </Typed> */}
          </div>
          <span>{`{`}</span>
        </Text>
      </Wrapper>
    </>
  );
};

export default Stack;
