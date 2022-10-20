import styled from "styled-components";

export const Container = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
gap: 2rem;
height: 450px;
width: 100%;
margin-top: 3rem;
margin-bottom: 2rem;

.box-icons {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > svg {
    color: #fff;
    transition: 0.5s;

    &:hover {
      color: #9f86c0;
      cursor: pointer;
      transition: ease;
    }
  }

  @media(max-width:550px) {
    display: flex;
    flex-direction: row;
  }
}

@media(max-width:700px) {
display: flex;
flex-direction: row-reverse;
align-items: center;
justify-content: space-around;
gap: 2rem;
height: 450px;
width: 100%;
margin-top: 3rem;
}
@media(max-width:550px) {
display: flex;
flex-direction: column-reverse;
align-items: center;
justify-content: center;
height: 750px;
width: 100%;
margin-top: 3rem;
}
`

export const Section = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;

 p {
  font-size: 100px;
  display: block;
 }

 span {
  display: block;
  font-size: 110px;
  font-family: 'Sriracha', cursive;
  color:#be95c4;
 }

 @media(max-width:1000px) {
  p {
  font-size: 70px;
  display: block;
 }

 span {
  display: block;
  font-size: 80px;
  font-family: 'Sriracha', cursive;
  color:#be95c4;
 }

 @media(max-width:850px) {
  p {
  font-size: 60px;
  display: block;
 }

 span {
  display: block;
  font-size: 70px;
  font-family: 'Sriracha', cursive;
  color:#be95c4;
 }
}
  }
`

export const Image = styled.div`
display: flex;
flex-direction: column;

img {
  width: 300px;
  height: 400px;
  border-radius: 50%;
  border: 8px solid #231942;
}

@media(max-width:850px) {
  img {
  width: 200px;
  height: 300px;
  border-radius: 50%;
  border: 8px solid #231942;
}
}
`