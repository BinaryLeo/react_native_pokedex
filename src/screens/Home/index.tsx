import { View, Image, ActivityIndicator } from "react-native";
import { SearchBar } from "../../components/SearchBar";
import { Small } from "../../constants/index";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { PokemonProps } from "../../types/pokemonSettings";
import { ResponseProps } from "../../types/responseProps";
import { PokemonList } from "../../components/PokemonList";


export function CharacterList() {
  const [pokemons, setPokemon] = useState<PokemonProps[]>([]);
  const [nextUrl, setNextUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const loading=false;
  const requestApi = useCallback(() => {
    axios.get(nextUrl).then((res: ResponseProps) => {
      const arrayPoke: PokemonProps[] = [...pokemons];
      setNextUrl(res.data.next);
      async function loadPokemonInfo() {
        for (const poke of res.data.results) {
          const { data } = await axios.get(poke.url);
          arrayPoke.push(data);
        }
        setPokemon(arrayPoke);
      }
      loadPokemonInfo();
    });
  }, [pokemons, nextUrl]);
  useEffect(() => {
    requestApi();
  }, []);
  return (
    <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
      <View style={{ width: "30%",alignItems: "center", marginTop: 17 }}>
        <Image source={Small} />
      </View>
      <SearchBar />
     {!loading?(
      <PokemonList
      arrayPoke={pokemons}
      RequestAPI={requestApi}
      />
     ):
     (
      <ActivityIndicator/>
     )}
    </View>
  );
}

