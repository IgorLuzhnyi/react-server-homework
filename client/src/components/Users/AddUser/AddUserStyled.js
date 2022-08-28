import styled from "styled-components";

export const AddUserStyled = styled.div`
  .add-user-form {
    margin: 180px auto 0;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-bottom: 20px;
  }

  .input-wrapper {
    margin: 10px;
    border: 2px solid transparent;
  }

  input {
    font-family: "Libre Baskerville", serif;
    font-size: 18px;
    outline: none;
    padding: 5px;
    width: 300px;
  }

  button {
    margin-top: 10px;
    font-family: "Libre Baskerville", serif;
    font-size: 18px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.$lightGold};
    color: ${({ theme }) => theme.$darkGold};
    cursor: pointer;
    border: none;
    padding: 5px;
    width: 312px;
  }
`;
