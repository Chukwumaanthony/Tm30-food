import { LuSearch } from "react-icons/lu";
import styled from "styled-components";
// import { Colors } from "../Reuseable/Colours";
// import { Colors } from "../Reuseable/Colours";

function AnimatedInput() {
  return (
    <Container>
      <input placeholder="Search" type="search"/>
      <div>
        <LuSearch />
      </div>
    </Container>
  );
}

export default AnimatedInput;

const Container = styled.div`
  height: 10px;
  display: flex;
  cursor: pointer;
  padding: 5px 8px;
  background-color: white;
  border-radius: 30rem;
  align-items: center;
  justify-content: center;
   box-shadow: 0px 0px 5px black;

  &:hover input {
    width: 180px;
  }
  &:hover {
    box-shadow: 0px 0px 2px black;
  }
  &:focus-within {
    box-shadow: 0px 0px 4px black;
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

 }`
;