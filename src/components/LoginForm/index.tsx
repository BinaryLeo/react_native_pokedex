import React, { useState } from "react";
import { Alert, Button } from "react-native";
import { TextInput } from "react-native-paper";
import { Container, Welcome, Label } from "./styles";
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
    <Container>
      <Welcome>Bem-vindo</Welcome>
      <Label>Insira seus dados para acessar</Label>

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
      <Button title="Login" onPress={() => SignIn()} />
    </Container>
  );
}
