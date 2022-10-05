import React from "react";
import { View, Image, ImageBackground, Dimensions } from "react-native";
import { LoginForm } from "./src/components/LoginForm";
import { SignIn } from "./src/screens/SignIn";

export function App() {
  return (
    <View>
      <SignIn/>
    </View>
  );
}
