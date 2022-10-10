import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens/Home/";

export function AppRoute() {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={"home"}
        screenOptions={{ headerShown: false }}
      >
        <Screen name="home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
