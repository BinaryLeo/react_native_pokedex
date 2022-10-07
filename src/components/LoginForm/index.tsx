import React, { useState } from "react";
import { Alert, Button, Text } from "react-native";
import { TextInput } from "react-native-paper";
import * as style from "./styles";
export function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailToLogin, setEmailToLogin] = useState("");
  const [passwordToLogin, setPasswordToLogin] = useState("");

  const SignIn = () => {
    const strongRegex = new RegExp(
      "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
    );

    if (!strongRegex.test(emailToLogin)) {
      Alert.alert("Please enter your email address");
      return false;
    } else if (emailToLogin == "") {
      Alert.alert("Please enter your email address");
    } else if (passwordToLogin.length < 8) {
      Alert.alert("Wrong password");
      return false;
    } else {
      Alert.alert("Yes");
    }
  };
  return (
    <style.Container>
      <style.Welcome>Welcome</style.Welcome>
      <style.Label>Insert your credentials</style.Label>

      <TextInput
        label="Email"
        mode="flat"
        onChangeText={(emailToLogin) => setEmailToLogin(emailToLogin)}
      />
      <TextInput
        label="Senha"
        secureTextEntry={passwordVisible}
        mode="flat"
        onChangeText={(passwordToLogin) => setPasswordToLogin(passwordToLogin)}
        right={
          <TextInput.Icon
            name={passwordVisible ? "eye" : "eye-off"}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />
      <style.ButtonSignIn onPress={() => SignIn()}>
        <style.ButtonSignInText>SignIn</style.ButtonSignInText>
      </style.ButtonSignIn>
    </style.Container>
  );
}
