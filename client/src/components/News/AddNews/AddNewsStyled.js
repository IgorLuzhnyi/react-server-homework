import styled from "styled-components";

export const AddNewsStyled = styled.div`
  .add-news-form {
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
    width: 400px;
    padding: 5px;
  }

  .form-content {
    resize: none;
    font-family: "Libre Baskerville", serif;
    font-size: 18px;
    outline: none;
    width: 400px;
    padding: 5px;
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
    width: 412px;
  }
`;
