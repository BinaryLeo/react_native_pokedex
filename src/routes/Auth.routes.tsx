import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {SignIn} from "../screens/SignIn";

export function AuthRoutes(){
    const { Navigator, Screen } = createStackNavigator();
    return(
        <NavigationContainer>
            <Navigator
            initialRouteName={"signIn"}
            screenOptions={{ headerShown: false }}
            >
           <Screen name={"signIn"} component={SignIn} />
            </Navigator>
        </NavigationContainer>
          
    ) 
}