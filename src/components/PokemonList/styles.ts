import { Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

const { height, width } = Dimensions.get("window");

const calcHeight = height / 6;



export const ContainerItem = styled(LinearGradient)`
  width: ${width / 2.2}px;
  height: ${calcHeight}px;
  margin: 15px 8px;
  justify-content: center;
  align-items: center;
  overflow: visible;
  border-radius: 20px;
`;

export const ContainerNamePokemon = styled.View`
  background-color: #676767;
  padding: 3px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  position: absolute;
  bottom: 0px;
`;

export const ImagePokemon = styled.Image`
  width: 100px;
  height: 100px;
  position: absolute;
  top: -30px;
`;

export const NamePokemon = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-transform: capitalize;
`;

export const FlatList = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingVertical: 30,
    paddingBottom: calcHeight,
  },
  numColumns: 2,
})``;
