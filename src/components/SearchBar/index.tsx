import { useState } from "react";
import { Searchbar, IconButton, Button } from "react-native-paper";
import * as style from "./style";

export function SearchBar() {
  const [searchPokeQuery, setSearchPokeQuery] = useState("");
  const onChangeSearch = (query) => setSearchPokeQuery(query);
  return (
    <style.Separator>
      <style.Container>
        <Searchbar
          placeholder="Search Pokemon"
          onChangeText={onChangeSearch}
          value={searchPokeQuery}
          style={{
            marginTop: 20,
            width: 288,
            height: 46,
            borderRadius: 30,
            backgroundColor: "#E5E5E5",
          }}
        />
        <IconButton icon="tune" color="#5E5D5D" size={28} />
      </style.Container>
      <style.ButtonContainer>
        <Button
          icon="close-circle"
          mode="contained"
          onPress={() => console.log("Pressed")}
          labelStyle={{ color: "#5E5E5E", fontSize: 16 }}
          style={{
            height: 40,
            borderRadius: 20,
            backgroundColor: "#E5E5E5",
            alignItems: "center",
            justifyContent: "center",
          }}
          contentStyle={{ flexDirection: "row-reverse" }}
        >
          All
        </Button>
      </style.ButtonContainer>
    </style.Separator>
  );
}
