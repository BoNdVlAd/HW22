import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  height: calc(100vh - 180px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 60rem;
  height: 40rem;
  @media only screen and (max-width: 1024px) {
    font-size: 28px;
    height: 30rem;
  }
  margin: 0px auto;
  display: grid;
  gap: 20px;
  flex-direction: column;
  font-size: 36px;
  align-items: center;
`;

const Item = styled.div`
  cursor: pointer;
  position: relative;
  transition: all ease 0.3s;
  &:nth-child(odd) {
    justify-self: left;
    transform: translateX(-2000px);
      &.active {
        transform: translateX(0px);
  }
  }
  &:nth-child(even) {
    justify-self: right;
    transform: translateX(2000px);
      &.active {
        transform: translateX(0px);
  }
`;

const Copy = styled.span`
  padding: 5px;
  font-size: 24px;
  background-color: #2b303a;
  color: #fff;
  border-radius: 20px;
  display: block;
  position: absolute;
  left: 10rem;
  top: 0px;
  transition: all ease 0.3s;
  opacity: 0;
  &.active {
    opacity: 1;
    transform: translateY(-50px);
  }
`;

const Contacts = () => {
  const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));
  const contact1Ref = React.useRef<any>(null);
  const contact2Ref = React.useRef<any>(null);
  const contact3Ref = React.useRef<any>(null);
  const contact4Ref = React.useRef<any>(null);
  const contact5Ref = React.useRef<any>(null);

  const [copy, setCopy] = React.useState(1);

  const copiedRef1 = React.useRef<any>(null);
  const copiedRef2 = React.useRef<any>(null);
  React.useEffect(() => {
    doAnimation();
  }, []);

  const doAnimation = async () => {
    await sleep();
    if (contact1Ref.current) {
      contact1Ref.current.classList.add('active');
    }

    await sleep();
    if (contact2Ref.current) {
      contact2Ref.current.classList.add('active');
    }
    await sleep();
    if (contact3Ref.current) {
      contact3Ref.current.classList.add('active');
    }
    await sleep();
    if (contact4Ref.current) {
      contact4Ref.current.classList.add('active');
    }
    await sleep();
    if (contact5Ref.current) {
      contact5Ref.current.classList.add('active');
    }
  };

  function copyToClipboard(e: any, value: string, n: number) {
    setCopy(n);
    if (n === 1) {
      if (copiedRef1.current) {
        console.log('YES1');
        copiedRef1.current.classList.add('active');
      }
      setTimeout(() => {
        if (copiedRef1.current) {
          copiedRef1.current.classList.remove('active');
        }
      }, 2000);
    }
    if (n === 2) {
      if (copiedRef2.current) {
        console.log('YES1');
        copiedRef2.current.classList.add('active');
      }
      setTimeout(() => {
        if (copiedRef2.current) {
          copiedRef2.current.classList.remove('active');
        }
      }, 2000);
    }

    navigator.clipboard.writeText(value);
  }

  return (
    <>
      <Flex>
        <Wrapper>
          <Item onClick={(e) => copyToClipboard(e, '@BONDVados', 1)} ref={contact1Ref}>
            TELEGRAM - @BONDVados
            <Copy ref={copiedRef1}>copied!</Copy>
          </Item>

          <Item onClick={(e) => copyToClipboard(e, '0930072824', 2)} ref={contact2Ref}>
            (093-007-28-24) - Phone
            <Copy ref={copiedRef2}>copied!</Copy>
          </Item>
          <Item ref={contact3Ref}>
            LinkedIn - <a href="http:\\linkedin.com/in/vlad-bondarenko-933229270">linkedin</a>
          </Item>
        </Wrapper>
      </Flex>
    </>
  );
};

export default Contacts;
