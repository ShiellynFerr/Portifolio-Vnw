import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding:  0rem 4rem;
  height: 100%;

  h1 {
    font-size: 40px;
    font-family: "Poppins", sans-serif;
  }
`;

export const Section = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;

  div {
    display: flex;
    gap: 20px;
  }
`;
