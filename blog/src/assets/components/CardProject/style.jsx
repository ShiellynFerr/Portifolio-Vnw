import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  height: 500px;
  color: #fff;
  border-radius: 10px;
  background-color: #523e8d;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.103);
  padding: 20px 8px;
  font-family: "Poppins", sans-serif;

  h2 a {
    text-decoration: none;
    color: #fff;
  }

  img {
    width: 380px;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  p {
    text-align: justify;
    margin-bottom: 1rem;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 10px;

    > svg:hover {
    color: #ffffff;
    cursor: pointer;
    transition: ease;
  }

  }

  span {
    text-transform: uppercase;
    font-weight: bold;
  }

  @media(max-width:700px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  color: #fff;
  border-radius: 10px;
  background-color: #523e8d;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.103);
  padding: 10px 8px;
  font-family: "Poppins", sans-serif;

  h2 a {
    text-decoration: none;
    color: #fff;
  }

  img {
    width: 280px;
    height: 200px;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  p {
    text-align: justify;
    margin-bottom: 1rem;
    font-size: 14px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 10px;

    > svg:hover {
    color: #ffffff;
    cursor: pointer;
    transition: ease;
  }

  }

  span {
    text-transform: uppercase;
    font-weight: bold;
  }
  }

  @media(max-width:500px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 450px;
  color: #fff;
  border-radius: 10px;
  background-color: #523e8d;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.103);
  padding: 15px 8px;
  font-family: "Poppins", sans-serif;

  h2 a {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
  }

  img {
    width: 180px;
    height: 100px;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  p {
    text-align: justify;
    margin-bottom: 1rem;
    font-size: 12px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 10px;

    > svg:hover {
    color: #ffffff;
    cursor: pointer;
    transition: ease;
  }

  }

  span {
    text-transform: uppercase;
    font-weight: bold;
  }
  }
 
`;
