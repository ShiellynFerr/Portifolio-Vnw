import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  h1 {
    font-size: 40px;
  }

  h1 span {
    color: #9f86c0;
  }

  nav ul {
    display: flex;
    gap: 3rem;
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    color: #fff;

    &:hover {
      color: #9f86c0;
    }
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    h1 {
      font-size: 25px;
    }
    nav ul {
      display: flex;
      gap: 3rem;
    }

    a {
      text-decoration: none;
      font-size: 1rem;
      color: #fff;
    }
  }
`;
