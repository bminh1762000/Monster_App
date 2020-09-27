import React from "react";
import styled from "styled-components";

const FormInput = ({searchedRobot, setSearchedRobot}) => {
  return (
    <div className="form-input">
      <form>
        <Input type="text" placeholder="Search Robots ..."  value={searchedRobot} onChange={e=>setSearchedRobot(e.target.value)} />
      </form>
    </div>
  );
};

const Input = styled.input`
  display: inline-block;
  padding: 0.75rem 1rem;
  background-color: #dfe4ea;
  border: 0.2rem solid #00d2d3;
  border-radius: 0.25rem;

  @media screen and (max-width: 768px) {
    width: 58%;
  }
`;

export default FormInput;
