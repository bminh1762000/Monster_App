import React from "react";
import styled from 'styled-components';

import CardItem from "../card-item/card-item.component";

const CardList = ({ robots }) => {
  return (
    <SectionCardList>
      <CardListContainer>
        {robots.map(({ id, ...otherProps }) => (
          <CardItem key={id} {...otherProps} />
        ))}
      </CardListContainer>
    </SectionCardList>
  );
};

const SectionCardList = styled.section`
   padding: 2rem 3.5rem;
`;

const CardListContainer = styled.div`
   display : flex;
   flex-wrap : wrap;
   flex-direction : row;
   place-content : center;

   
   @media screen and (max-width : 768px){
    flex-direction : column;   
  }
`;

export default CardList;