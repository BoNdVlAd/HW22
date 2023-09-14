import React from 'react';

// import Typed from 'react-typed';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
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
    'HTML',
    'CSS ',
    'JavaScript',
    'React',
    'Redux',
    'TypeScript',
    'Tailwind',
    'styled-components',
  ];

  return (
    <>
      <Wrapper>
        {/* <Text> */}
        {/* <span>{`myStack: {`}</span>
          <div style={{ paddingLeft: '40px' }}>
            <Typed loop strings={technologies} backSpeed={70} typeSpeed={70} />
          </div>
          <span>{`{`}</span>
        </Text> */}
      </Wrapper>
    </>
  );
};

export default Stack;
