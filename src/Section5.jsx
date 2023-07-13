import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 700px;
  background: #fff;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Wrap = styled.div`
background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;

  h1 {
    padding: 10px;
    font-size: 15px;
    margin-left:20px;
  }

  span {
    margin-right: 15px;
  }
`;

const Dropdown = styled.div`
  background: black;
  color: white;
  width: 100%;
  height: max-contenty;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  p {
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
  }
`;

const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: 'black', size: '16px' }}>
      <AccordionSection>
        <Container>
        <h1 style={{marginTop: '-250px', fontSize: '20px', textAlign: 'center'}}>Frequently Asked Questions</h1>
          {Data.map((item, index) => {
            return (
              <>
              
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.question}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;