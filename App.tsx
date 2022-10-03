import React from "react";
import { View, Image, ImageBackground, Dimensions } from "react-native";
import { LoginForm } from "./src/components/Login";

export function App() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("./src/assets/pictures/background.png")}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
      >
        <View style={{ width: "100%", alignItems: "center", marginTop: "15%" }}>
          <Image source={require("./src/assets/pictures/logo.png")} />
        </View>
        <LoginForm />
      </ImageBackground>
    </View>
  );
}
