import { useCallback } from "react";
import { ActivityIndicator } from "react-native-paper";
import * as style from "./styles";
import {
  PokemonProps,
  BgPokeColor,
  PropsKeyColor,
  FlatListProps,
} from "../../types/pokemonSettings";
import { TouchableOpacity } from "react-native";

export function PokemonList({ RequestAPI, arrayPoke }: FlatListProps) {
  const renderItem = useCallback(({ item }: { item: PokemonProps }) => {
    const type = item.types[0].type.name;

    return (
      <TouchableOpacity>
      <style.ContainerItem colors={BgPokeColor[type as PropsKeyColor]}>
        <style.ImagePokemon
          source={{ uri: item.sprites.other["official-artwork"].front_default }}
        />

        <style.ContainerNamePokemon>
          <style.NamePokemon>{item.name}</style.NamePokemon>
        </style.ContainerNamePokemon>
      </style.ContainerItem>
      </TouchableOpacity>
    );
  }, []);

  return (
    <>
      <style.FlatList
        data={arrayPoke}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        onEndReached={RequestAPI}
        onEndReachedThreshold={0.1}
        ListFooterComponent={<ActivityIndicator />}
      />
    </>
  );
}
