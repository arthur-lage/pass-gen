import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 3.6rem;
`;

export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    width: 100%;
    max-width: 80vw;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
  gap: 2.5rem;
`;

export const SliderInput = styled.input`
  width: 100%;
  height: 1.25rem;
  opacity: 0.7;
  transition: opacity 0.2s;
  -webkit-transition: 0.2s;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 50rem;

  &:hover {
    opacity: 1;
  }

  &::-webkit-slider-thumb {
    width: 3.25rem;
    height: 3.25rem;
    cursor: pointer;
    -webkit-appearance: none;
    border-radius: 50%;
    appearance: none;
    background: #35c;
    filter: brightness(1.4);
  }
`;

export const SliderValue = styled.span`
  font-size: 2rem;
`;

export const PasswordInput = styled.input`
  display: flex;
  border-radius: 0.6rem;
  border: 2px solid #444;
  padding: 1rem;
  width: 100%;
  font-size: 1.6rem;
  color: #fff;
  outline: none;
  background: transparent;
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 1.5rem;
`;

export const PasswordWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 2rem;
`;

export const CopyPassword = styled.button`
  border: 0;
  background: #52c;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.6rem;
  color: #fff;
  outline: none;
  transition: 0.15s ease;

  &:hover {
    filter: brightness(1.3);
  }
`;

export const CheckInput = styled.input`
  cursor: pointer;
`;

export const CheckLabel = styled.label`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ExtraOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const GenerateButton = styled.button`
  margin-top: 3rem;
  font-size: 1.8rem;
  padding: 1rem;
  border-radius: 50rem;
  color: #fff;
  background: #35c;
  border: 0;
  cursor: pointer;
  width: 100%;
  transition: 0.15s ease;

  &:hover {
    filter: brightness(1.3);
  }
`;
