import { LuSearch } from "react-icons/lu";
import styled from "styled-components";
// import { Colors } from "../Reuseable/Colours";
// import { Colors } from "../Reuseable/Colours";

function AnimatedInput() {
  return (
    <Container>
      <input placeholder="Search" type="search" />
      <div style={{ paddingRight: ".22rem" }}>
        <LuSearch />
      </div>
    </Container>
  );
}

export default AnimatedInput;

const Container = styled.div`
  /* height: 10px; */
  display: flex;
  cursor: pointer;
  padding: 0.25rem;
  padding-inline: 0.1rem;
  background-color: white;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;

  &:hover input {
    width: 200px;
  }

  input {
    width: 0;
    outline: none;
    border: none;
    font-weight: 500;
    transition: 0.8s;
    background-color: transparent;

    &::placeholder {
      color: #b9b6c6;
      letter-spacing: 0.5px;
      font-size: 0.78rem;
    }
  }

  div {
    color: #a3a3a3;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`;
