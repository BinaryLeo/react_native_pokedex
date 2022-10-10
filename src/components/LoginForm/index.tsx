import { TextInput } from "react-native-paper";
import * as style from "./styles";
interface IProps {
  onGetEmail: (text: string) => void;
  onGetPassword: (text: string) => void;
  onSignIn: () => void;
  onSignOut: () => void;
  secure: boolean;
  onShowPassword: () => void;
}
export function LoginForm({
  onGetEmail,
  onGetPassword,
  onSignIn,
  onSignOut,
  secure,
  onShowPassword,
}: IProps) {
  return (
    <style.Container>
      <style.Welcome>Welcome</style.Welcome>
      <style.Label>Insert your credentials</style.Label>

      <TextInput label="Email" mode="flat" onChangeText={onGetEmail} />
      <TextInput
        label="Password"
        secureTextEntry={secure}
        mode="flat"
        onChangeText={onGetPassword}
        right={
          <TextInput.Icon
            name={secure ? "eye" : "eye-off"}
            onPress={onShowPassword}
          />
        }
      />
      <style.ButtonSignIn onPress={onSignIn}>
        <style.ButtonSignInText>SignIn</style.ButtonSignInText>
      </style.ButtonSignIn>
      <style.ButtonSignIn onPress={onSignOut}>
        <style.ButtonSignInText>SignUp</style.ButtonSignInText>
      </style.ButtonSignIn>
    </style.Container>
  );
}
