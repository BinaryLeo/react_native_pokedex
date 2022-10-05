import { Dimensions, ImageBackground, Image, View } from "react-native";
import{BackgroundImage,Logo} from "../../constants/index"
export function BackGround() {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }}
    >
      <View style={{ width: "100%", alignItems: "center", marginTop: "15%" }}>
        <Image source={Logo} />
      </View>
    </ImageBackground>
  );
}
