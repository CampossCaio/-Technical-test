import styled, { keyframes } from 'styled-components';

const descriptionTranslate = keyframes`
   0% {
      transform: translateY(50px);
      opacity: 0;
    }
  100% {
      transform: translateY();
    }
`;

const buttonTranslate = keyframes`
   0% {
      transform: translateY(25px);
      opacity: 0;
    }
  100% {
      transform: translateY();
    }
`;

const inputsTranslate = keyframes`
   0% {
      transform: translateX(100px);
      opacity: 0;
    }
  100% {
      transform: translateX();
    }
`;



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  
  section {
    display: flex;
    width: 100%;
    justify-content: center;
    background: #F7F7F7;
    z-index: 1;
    border-radius: 0 0 20px 20px;

    form {
      display: flex;
      flex-direction: column;
      height: 100%;

      button {
        border: 0;
        outline: 0;
        padding: 6px;
        color: #fff;
        font-weight: bold;
        background: #CE6840;
        width: 100px;
        border-radius: 15px;
        margin: 30px 0 20px 0;
        align-self: flex-end;
        margin-right: 95px;
        cursor: pointer;
        transition: opacity 0.2s;
        //animation: ${buttonTranslate} 2s;
      }

      button:hover {
        opacity: 0.8;
      }
    }
  }

  main {
    display: flex;
    width: 100%;
    background: #F7F7F7;
    flex-direction: column;
    z-index: 1;
    border-radius: 20px 20px 0 0;
    padding: 100px 0;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 100px;
  margin-bottom: 50px;

  span {
    margin-top: 20px;
    align-self: flex-end;
    text-align: end;
    color: #1E1D3C;
    //animation: ${descriptionTranslate} 2s ;
  }
`;

export const Title1 = styled.h1`
  color: #2C3E88;
  text-align: center;
  font-size: 30px;
`;

export const Title2 = styled.h1`
  color: #CE6840;
  margin-left: 120px;
  font-size: 30px;

  /* ::after {
    content: '|';
    color: rgba(0, 0, 0, 0.3);
    opacity: 1;
    animation: ${flashes} .7s infinite;
  } */
`;

export const InputContainer = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin-right: 20px;
    //animation: ${inputsTranslate} 2s;

    input {
      background: #F7F7F7;
      border: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
      outline: 0;
      color: rgba(0, 0, 0, 0.6);
      padding: 2px 0;
    }

    label {
      font-size: 14px;
      color: #94908F;
      margin-bottom: 5px;
    }
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 180px;
  margin-top: -20px;
  margin-bottom: -20px;
  z-index: 0;
`;

export const ServicesContainer = styled.div`
  display: flex;
  padding: 50px;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 50px;
    display: flex;
    width: 100%;
    max-width: 250px;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    img {
      height: 100px;
      width: 100px;
    }

    span {
      color: #8E8E8E;
      text-align: center;
      margin-top: 20px;
    }
  }
`;


