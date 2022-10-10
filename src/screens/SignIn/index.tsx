import { useState } from "react";
import { Alert, View } from "react-native";
import { beAuthenticated } from "../../store/modules/Auth.store";
import { useDispatch } from "react-redux";
import auth from "@react-native-firebase/auth";
import { BackGround } from "../../components/BackGround";
import { LoginForm } from "../../components/LoginForm";

export function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailToLogin, setEmailToLogin] = useState("");
  const [passwordToLogin, setPasswordToLogin] = useState("");
  const dispatch = useDispatch();
  function SignUp() {
    if (emailToLogin == "") {
      Alert.alert("Please enter a valid email");
    } else {
      auth()
        .createUserWithEmailAndPassword(emailToLogin, passwordToLogin)
        .then((useCredential) => {
          Alert.alert(`User for ${emailToLogin} created successfully`);
          console.log(useCredential);
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            Alert.alert("Email already in use");
          }
          if (error.code === "auth/invalid-email") {
            Alert.alert("Invalid email");
          }
          if (error.code === "auth/invalid-password") {
            Alert.alert("Invalid password, must be at least 6 characters");
          }
        });
    }
  }
  function SignIn() {
    if (emailToLogin == "") {
      Alert.alert("Please enter a valid email");
    }
    if (passwordToLogin.length < 6) {
      Alert.alert("Invalid password, must be at least 6 characters");
      return false;
    } else {
      auth()
        .signInWithEmailAndPassword(emailToLogin, passwordToLogin)
        .then(() => {
          dispatch(beAuthenticated(emailToLogin));
          Alert.alert(`${emailToLogin} logged with successfully`);
        })
        .catch((error) => Alert.alert(error));
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <BackGround />
      <LoginForm
        onGetEmail={(emailToLogin) => setEmailToLogin(emailToLogin)}
        onGetPassword={(passwordToLogin) => setPasswordToLogin(passwordToLogin)}
        onSignIn={SignIn}
        onSignOut={SignUp}
        secure={passwordVisible}
        onShowPassword={() => setPasswordVisible(!passwordVisible)}
      />
    </View>
  );
}
