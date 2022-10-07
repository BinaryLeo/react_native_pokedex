import { Dimensions } from "react-native";
import styled from "styled-components/native";
const deviceWidth = Dimensions.get("screen").width;
const deviceHeight = Dimensions.get("screen").height;
export const ImageBg = styled.ImageBackground`
  src: url(${(props) => props.img});
  position: absolute;
  left: 0;
  width: ${deviceWidth}px;
  height: ${deviceHeight}px;
  top: 0;
`;
export const PokeLogo = styled.Image`

`;
export const Container = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 15%;
`;
