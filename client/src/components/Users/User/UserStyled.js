import styled from "styled-components";

export const UserStyled = styled.div`
  .user-container-inner {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 440px;
    width: 100%;
    background-color: ${({ theme }) => theme.$bgContainerColor};
    border-radius: 10px;
    padding: 10px;
    color: ${({ theme }) => theme.$lightGold};
  }

  .userdata,
  .user-actions {
    height: 45px;
    display: flex;
    flex-direction: column;
  }

  .userdata {
    width: 250px;
    justify-content: space-between;
  }

  .user-actions {
    width: 60px;
    justify-content: center;
  }

  span {
    color: #fff;
  }

  .avatar-img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  button {
    font-family: "Marcellus", serif;
    font-weight: bold;
    background-color: ${({ theme }) => theme.$lightGold};
    color: ${({ theme }) => theme.$darkGold};
    cursor: pointer;
    border: none;
    padding: 5px;
    width: 60px;
  }
`;
