import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 50px;
    text-align: center;
  }
`;
export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;

  @media(max-width: 650px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-bottom: 4rem;

    }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 550px;
    height: 350px;
    background-color: #80008029;
    color: #fff;
    padding: 5px 20px;
    border-radius: 10px;

    p {
      text-align: justify;
      font-size: 18px;
    }

    @media(max-width:650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 420px;
    height: 300px;
    background-color: #80008029;
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    }
    p {
      text-align: justify;
      font-size: 16px;
    }

    @media(max-width:500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 320px;
    height: 250px;
    background-color: #80008029;
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    }

    p {
      text-align: justify;
      font-size: 14px;
    }
  }

  img {
    width: 300px;
    height: 350px;
    border-radius: 10px;

    @media(max-width:500px) {
    width: 200px;
    height: 250px;
    border-radius: 10px;
    }
  }
`;
