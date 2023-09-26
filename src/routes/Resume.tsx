import React from 'react';
import CV from '../assets/CV_Bondarenko_Vladyslav.pdf';
import styled from 'styled-components';

const Flex = styled.div`
  height: calc(100vh - 170px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  min-width: 300px;
  min-height: 60px;
  font-size: 22px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 700;
  color: #313133;
  background: #4fd1c5;
  background: linear-gradient(90deg, rgba(129, 230, 217, 1) 0%, rgba(79, 209, 197, 1) 100%);
  border: none;
  border-radius: 1000px;
  box-shadow: 12px 12px 24px rgba(79, 209, 197, 0.64);
  transition: all 0.3s ease-in-out 0s;
  cursor: pointer;
  outline: none;
  position: relative;
  padding: 20px;

  &::before {
    content: '';
    border-radius: 1000px;
    min-width: 100%;
    min-height: 100%;
    border: 6px solid #00ffcb;
    box-shadow: 0 0 60px rgba(0, 255, 203, 0.64);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all 0.3s ease-in-out 0s;
  }

  &:hover,
  &:focus {
    color: #313133;
    transform: translateY(-6px);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &::after {
    content: '';
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 6px solid #00ffcb;
    position: absolute;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: ring 1.5s infinite;
  }

  &:hover::after,
  &:focus::after {
    animation: none;
    display: none;
  }

  @keyframes ring {
    0% {
      width: 1rem;
      height: 1rem;
      opacity: 1;
    }
    100% {
      width: 22rem;
      height: 22rem;
      opacity: 0;
    }
  }
`;

const Resume = () => {
  const doAnimation = () => [];

  return (
    <>
      <Flex>
        <a href={CV} download="CV_Bondarenko_Vladyslav">
          <Button className="glow-on-hover" type="button">
            download the resume
          </Button>
        </a>
      </Flex>
    </>
  );
};

export default Resume;
