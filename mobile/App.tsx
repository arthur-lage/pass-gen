import React, { useEffect, useState } from "react";

import Slider from "@react-native-community/slider";

import { StatusBar } from "expo-status-bar";

import { Entypo } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useFonts } from "expo-font";

import AppLoading from "expo-app-loading";

import {
  RobotoMono_400Regular,
  RobotoMono_700Bold,
} from "@expo-google-fonts/roboto-mono";

import * as Clipboard from "expo-clipboard";

import Checkbox from "expo-checkbox";

export default function App() {
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [passwordLength, setPasswordLength] = useState(6);

  const [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
    RobotoMono_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  async function copyToClipboard() {
    await Clipboard.setStringAsync(generatedPassword);
  }

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

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>pass-gen</Text>

        <View style={styles.inputWrapper}>
          <TextInput
            editable={false}
            style={styles.passwordInput}
            value={generatedPassword}
          />

          <TouchableOpacity
            style={styles.copyPassword}
            onPress={copyToClipboard}
          >
            <Entypo name="clipboard" size={32} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.sliderWrapper}>
          <Text style={styles.sliderLabel}>
            Password length: {passwordLength}
          </Text>
          <Slider
            style={styles.sliderInput}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#777"
            //@ts-ignore
            onValueChange={(e) => setPasswordLength(Math.floor(e))}
            value={passwordLength}
            minimumValue={1}
            maximumValue={24}
          />
        </View>

        <View style={styles.extraOptions}>
          <View style={styles.checkboxWrapper}>
            <Checkbox
              style={styles.checkbox}
              value={includeUppercase}
              onValueChange={setIncludeUppercase}
              color={includeUppercase ? "#d7c629" : undefined}
            />
            <Text style={styles.checkboxLabel}>
              Include uppercase characters
            </Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <Checkbox
              style={styles.checkbox}
              value={includeNumbers}
              onValueChange={setIncludeNumbers}
              color={includeNumbers ? "#d7c629" : undefined}
            />
            <Text style={styles.checkboxLabel}>Include numbers</Text>
          </View>
          <View style={styles.checkboxWrapper}>
            <Checkbox
              style={styles.checkbox}
              value={includeSymbols}
              onValueChange={setIncludeSymbols}
              color={includeSymbols ? "#d7c629" : undefined}
            />
            <Text style={styles.checkboxLabel}>Include symbols</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={generatePassword}
          style={styles.generateButton}
          activeOpacity={0.4}
        >
          <Text style={styles.generateText}>Generate</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="light" translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "RobotoMono_700Bold",
    fontSize: 36,
    textAlign: "center",
  },
  main: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "80%",
  },
  inputWrapper: {
    width: "100%",
    marginTop: 35,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
  },
  passwordInput: {
    backgroundColor: "transparent",
    borderRadius: 6,
    paddingLeft: 15,
    height: "100%",
    color: "#fff",
    fontFamily: "RobotoMono_400Regular",
    width: "80%",
    borderWidth: 2,
    borderColor: "#444",
  },
  copyPassword: {
    marginLeft: "auto",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#52c",
    color: "#fff",
  },
  extraOptions: {
    display: "flex",
    marginTop: 25,
    flexDirection: "column",
  },
  generateButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    width: "100%",
    height: 45,
    borderRadius: 50,
    backgroundColor: "#45c",
    padding: 10,
  },
  generateText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "RobotoMono_400Regular",
  },
  checkbox: {},
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: "RobotoMono_400Regular",
    color: "#fff",
  },
  checkboxWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  sliderWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: 20,
  },
  sliderInput: {
    width: "100%",
    height: 25,
    marginTop: 15
  },
  sliderLabel: {
    fontSize: 16,
    paddingLeft: 15,
    color: "#fff",
    fontFamily: "RobotoMono_400Regular",
  },
});
