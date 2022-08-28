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
  }

  h2 {
    text-align: center;
    margin: 40px 0;
  }

  .user-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
