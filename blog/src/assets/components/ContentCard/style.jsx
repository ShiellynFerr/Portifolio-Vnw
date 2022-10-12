import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 650px;
  margin-top: 10px;

  font-family: "Poppins", sans-serif;

  h3 {
    font-size: 20px;
    text-align: center;
  }
  P {
    text-align: justify;
    font-size: 16px;
    padding: 10px;
  }

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 650px;
    margin-top: 10px;

    font-family: "Poppins", sans-serif;

    h3 {
      font-size: 18px;
      text-align: center;
      padding: 0px 10px;
    }
    P {
      text-align: justify;
      font-size: 16px;
      padding: 10px;
    }

    @media (max-width: 850px) {
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 550px;
    margin-top: 10px;

    font-family: "Poppins", sans-serif;

    h3 {
      font-size: 16px;
      text-align: center;
      padding: 0px 10px;
    }
    P {
      text-align: justify;
      font-size: 14px;
      padding: 10px;
    }
    }

    @media(max-width:580px) {
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 550px;
    margin-top: 10px;

    font-family: "Poppins", sans-serif;

    h3 {
      font-size: 14px;
      text-align: center;
      padding: 0px 10px;
    }
    P {
      text-align: justify;
      font-size: 12px;
      padding: 10px;
    }
    }
  }

  @media(max-width:450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 350px;
    margin-top: 10px;

    font-family: "Poppins", sans-serif;

    h3 {
      font-size: 10px;
      text-align: center;
    }
    P {
      text-align: justify;
      font-size: 9px;
      padding: 10px;
    }
    }
`;
