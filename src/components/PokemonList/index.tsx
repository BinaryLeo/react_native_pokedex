import { useCallback } from "react";
import { View, ActivityIndicator } from "react-native";
import * as style from "./styles";
import { useNavigation } from "@react-navigation/native";
import {
  PokemonProps,
  BgPokeColor,
  PropsKeyColor,
  FlatListProps,
} from "../../types/pokemonSettings";

export function PokemonList({ RequestAPI, arrayPoke }: FlatListProps) {
  
  const renderItem = useCallback(({ item }: { item: PokemonProps }) => {
    const type = item.types[0].type.name;

    return (
      <style.ContainerItem bgColor={BgPokeColor[type as PropsKeyColor]}>
        <style.ImagePokemon
          source={{ uri: item.sprites.other["official-artwork"].front_default }}
        />

        <style.ContainerNamePokemon>
          <style.NamePokemon>{item.name}</style.NamePokemon>
        </style.ContainerNamePokemon>
      </style.ContainerItem>
    );
  }, []);

  return (
    <View>
      <style.FlatList
        data={arrayPoke}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={RequestAPI}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<ActivityIndicator />}
      />
    </View>
  );
}
