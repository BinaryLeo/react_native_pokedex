import React, { useState } from "react";
import { Button } from "react-native";
import { TextInput} from "react-native-paper";
import { Container, Welcome, Label } from "./styles";
export function LoginForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <Container>
      <Welcome>Bem-vindo</Welcome>
      <Label>Insira seus dados para acessar</Label>
      <TextInput placeholder="Email" />
      <TextInput
        label="Senha"
        secureTextEntry={passwordVisible}
        right={
          <TextInput.Icon
            name={passwordVisible ? "eye" : "eye-off"}
            onPress={() => setPasswordVisible(!passwordVisible)}
          />
        }
      />
      <Button title="Login" />
    </Container>
  );
}
