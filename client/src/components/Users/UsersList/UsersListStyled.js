import styled from "styled-components";

export const UsersListStyled = styled.div`
  .users-list {
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }

  .users-container {
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-height: 700px;
    overflow-y: auto;
  }

  h2 {
    text-align: center;
    margin: 40px 0;
  }
`;
