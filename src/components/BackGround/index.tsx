import { BackgroundImage, Logo } from "../../constants/index";
import * as style from "./styles";
export function BackGround() {
  return (
    <style.ImageBg source={BackgroundImage}>
      <style.Container>
        <style.PokeLogo source={Logo} />
      </style.Container>
    </style.ImageBg>
  );
}
