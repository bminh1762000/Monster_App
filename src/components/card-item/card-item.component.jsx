import React from "react";
import styled from 'styled-components';

import { Card } from "react-bootstrap";

const CardItem = ({name, email, imgUrl}) => {
  return (
    <CardContainer >
      <Card.Img variant="top" src={imgUrl} height='200'/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
            {email}
        </Card.Text>
      </Card.Body>
    </CardContainer>
  );
};

const CardContainer = styled(Card)`
   background-color : #48dbfb;
   box-shadow : 1px 3px 15px #2d3436;
   margin : 0 1rem 1rem 0;
   transition : all 0.3s linear;
   width : 14rem;
   
   &:hover{
      transform : scale(1.02) translate(1px,-1px);
   }

   @media screen and (max-width : 768px){
      width : 20rem;  
    }
`;

export default CardItem;
