import React from "react";
import { BsCheckAll } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import styled from "styled-components";

function EditableInput({ user, setUser, isDisabled, setIsDisabled, label }) {
  const handleEdit = (e) => {
    e?.preventDefault();
    setIsDisabled(!isDisabled);
  };
  return (
    <>
      <Container className="picdelsel">
        <span className="picdel">
          <label htmlFor="Dele" className="firstnamelabel">
            {label}
          </label>
          <span
            className="deleke"
            style={{
              borderBottom: isDisabled ? "1px solid #ccc" : "1px solid #36aad9",
            }}
          >
            <input
              style={{ width: "90%" }}
              type="text"
              id="Dele"
              defaultValue={user}
              onChange={(e) => {
                setUser(e?.target?.value);
              }}
              disabled={isDisabled}
            />
            <button onClick={handleEdit}>
              {isDisabled ? <FiEdit /> : <BsCheckAll />}
            </button>
          </span>
        </span>
      </Container>
    </>
  );
}

export default EditableInput;

const Container = styled.section`
  button {
    font-size: 1.1rem;
    cursor: pointer;
  }
`;
