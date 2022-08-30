import styled from "styled-components";

export const NewsStyled = styled.div`
  .news-container-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .news-date {
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 12px;
  }

  .newsdata {
    display: block;
  }

  .news-title {
    display: block;
    margin: 5px 0;
    text-align: center;
    font-size: 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.$lightGold};
  }

  p {
    margin-bottom: 10px;
  }

  .news-img-container {
    max-width: 100%;
    display: block;
  }

  .news-img {
    margin: 0 auto;
    display: block;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 200px;
  }

  .news-actions {
    position: absolute;
    top: 10px;
    right: 15px;
  }

  button {
    font-family: "Marcellus", serif;
    font-weight: bold;
    background-color: ${({ theme }) => theme.$lightGold};
    color: ${({ theme }) => theme.$darkGold};
    cursor: pointer;
    border: none;
    padding: 2px 5px;
    width: 60px;
  }
`;
