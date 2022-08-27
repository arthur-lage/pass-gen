import React, { useState } from "react";

import { ClipboardText } from "phosphor-react";

import "react-toastify/dist/ReactToastify.css";

import { toast, ToastContainer } from "react-toastify";

//@ts-ignore
import Checkbox from "react-custom-checkbox";

import {
  Container,
  Title,
  Main,
  PasswordInput,
  CheckWrapper,
  CheckLabel,
  ExtraOptions,
  GenerateButton,
  SliderWrapper,
  SliderValue,
  SliderInput,
  PasswordWrapper,
  CopyPassword,
} from "./styles/App";

export function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(6);

  function generatePassword() {
    let newPassword = "";
    let possibleCharacters = "qwertyuiopasdfghjklzxcvbnm";

    if (includeUppercase) {
      possibleCharacters += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }

    if (includeNumbers) {
      possibleCharacters += "1234567890";
    }

    if (includeSymbols) {
      possibleCharacters += "!@#$%";
    }

    for (let i = 0; i < passwordLength; i++) {
      const possibleCharactersIndex = Math.floor(
        Math.random() * possibleCharacters.length
      );

      newPassword += possibleCharacters[possibleCharactersIndex];
    }

    setGeneratedPassword(newPassword);
  }

  async function copyToClipboard() {
    await navigator.clipboard.writeText(generatedPassword);

    toast.success("Password copied to clipboard!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
      bodyStyle: {
        fontSize: 14,
      },
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <Container>
      <Title>pass-gen</Title>

      <Main>
        <PasswordWrapper>
          <PasswordInput type="text" value={generatedPassword} readOnly />

          <CopyPassword onClick={copyToClipboard}>
            <ClipboardText size={32} />
          </CopyPassword>
        </PasswordWrapper>

        <SliderWrapper>
          <SliderValue>Password length: {passwordLength}</SliderValue>
          <SliderInput
            type="range"
            min="1"
            value={passwordLength}
            max="24"
            /* @ts-ignore */
            onInput={(e) => setPasswordLength(e.target.value)}
          />
        </SliderWrapper>

        <ExtraOptions>
          <CheckWrapper>
            <Checkbox
              checked={includeUppercase}
              onChange={(value: any, ev: any) => setIncludeUppercase(value)}
              id="upper-case"
              type="checkbox"
            />
            <CheckLabel htmlFor="upper-case">
              Include uppercase characters
            </CheckLabel>
          </CheckWrapper>
          <CheckWrapper>
            <Checkbox
              checked={includeNumbers}
              onChange={(value: any, ev: any) => setIncludeNumbers(value)}
              id="numbers"
              type="checkbox"
            />
            <CheckLabel htmlFor="numbers">Include numbers</CheckLabel>
          </CheckWrapper>
          <CheckWrapper>
            <Checkbox
              style={{ cursor: "pointer" }}
              checked={includeSymbols}
              onChange={(value: any, ev: any) => setIncludeSymbols(value)}
              id="symbols"
              type="checkbox"
            />
            <CheckLabel htmlFor="symbols">Include symbols</CheckLabel>
          </CheckWrapper>
        </ExtraOptions>

        <GenerateButton onClick={generatePassword}>Generate</GenerateButton>
      </Main>

      <ToastContainer />
    </Container>
  );
}
