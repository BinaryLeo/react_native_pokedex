import { useState } from "react";
import { View } from "react-native";
import { Searchbar, IconButton, Chip } from "react-native-paper";

export function SearchBar() {
  const [searchPokeQuery, setSearchPokeQuery] = useState("");
  const onChangeSearch = (query) => setSearchPokeQuery(query);
  return (
    <View style={{marginBottom:30}}>
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          flexDirection: "row",
          padding: 5,
          marginBottom: 35,
          justifyContent: "space-evenly",
        }}
      >
        <Searchbar
          placeholder="Buscar Pokemon"
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
      </View>
      <View style={{ width: "100%", height: 20, marginLeft: 15}}>
        <Chip icon="close" onPress={() => console.log("Pressed")}>
          All
        </Chip>
      </View>
    </View>
  );
}
