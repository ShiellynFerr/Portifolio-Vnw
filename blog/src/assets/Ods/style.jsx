import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  .introduction {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 380px;
    padding: 0px 20px;
    background-color: #5e548e11;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.192);

    h1 {
      font-size: 40px;
      font-family: "Poppins", sans-serif;
    }

    p {
      font-size: 18px;
      text-align: left;
    }

    @media (max-width: 600px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 380px;
      padding: 0px 20px;
      background-color: #5e548e11;
      box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.192);

      h1 {
        font-size: 25px;
        font-family: "Poppins", sans-serif;
      }

      p {
        font-size: 18px;
        text-align: left;
      }
    }
    @media (max-width: 450px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 380px;
      padding: 0px 20px;
      background-color: #5e548e11;
      box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.192);

      h1 {
        font-size: 20px;
        font-family: "Poppins", sans-serif;
      }

      p {
        font-size: 16px;
        text-align: left;
      }
    }
  }
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 600px;

  h2 {
    font-size: 35px;
    font-family: "Poppins", sans-serif;
  }

  .cards-onu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 880px;
    gap: 10px;
  }

  .card {
    display: flex;
    align-items: center;
    background-color: rgba(8, 4, 4, 0.349);
    max-width: 980px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  div img {
    width: 280px;
    height: 300px;
  }

  @media(max-width:750px) {
    div img{
      width: 200px;
      height: 250px;
    } 

    .card {
    display: flex;
    align-items: center;
    background-color: rgba(8, 4, 4, 0.349);
    max-width: 680px;
    height: 250px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
    }

    @media(max-width:580px) {
    div img{
      width: 180px;
      height: 250px;
    } 

    h2 {
    font-size: 22px;
    font-family: "Poppins", sans-serif;
  }

    .card {
    display: flex;
    align-items: center;
    background-color: rgba(8, 4, 4, 0.349);
    max-width: 700px;
    height: 250px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
    }
    @media(max-width:450px) {
    div img{
      width: 130px;
      height: 180px;
    } 

    .card {
    display: flex;
    align-items: center;
    background-color: rgba(8, 4, 4, 0.349);
    max-width: 700px;
    height: 180px;
    border-radius: 8px;
    margin-bottom: 20px;
  }
    }
`;
