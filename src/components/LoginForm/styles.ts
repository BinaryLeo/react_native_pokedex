import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: space-evenly;
  width: 90%;
  height: 385px;
  margin-top: 50%;
  margin-left: 20px;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 20px;
`;
export const Welcome = styled.Text`
  color: #000;
  font-size: 24px;
  font-weight: 600;
`;
export const Label = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: 400;
`;
export const ButtonSignIn = styled.TouchableOpacity`
  background-color: #2e6eb5;
  border-radius: 10px;
  height: 48px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const ButtonSignInText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;
