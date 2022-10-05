import { View,} from "react-native";
import { BackGround } from "../../components/BackGround";
import { LoginForm } from "../../components/LoginForm";

export function SignIn() {
  return (
    <View style={{ flex: 1 }}>
    <BackGround/>
    <LoginForm/>
    </View>
  )
  
 
}
