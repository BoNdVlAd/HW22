import React from 'react';
import styled from 'styled-components';

const Selection = styled.select`
  padding: 10px;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  max-width: 100px;
  border-radius: 10px;
  border: none;
`;

const Option = styled.option`
  padding: 10px;
  outline: none;
  cursor: pointer;
  font-weight: 700;
  border-radius: 10px;
  height: 200px;
`;

const LanguageChanger = ({ changleLanguage }: any) => {
  return (
    <>
      <Selection onChange={(e) => changleLanguage(e.target.value)}>
        <Option value="en">English</Option>
        <Option value="ukr">Ukrainian</Option>
      </Selection>
    </>
  );
};

export default LanguageChanger;
