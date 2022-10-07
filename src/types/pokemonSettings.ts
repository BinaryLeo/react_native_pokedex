export type SpritesProps = {
  front_default: string;
};

export type PokemonProps = {
  id: number;
  name: string;
  sprites: {
    other: {
      "official-artwork": SpritesProps;
    };
  };
  types: [
    {
      type: {
        name: string;
      };
    }
  ];
  height: number;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      };
    }
  ];
};

export type SpeciesProps = {
  egg_groups: [
    {
      name: string;
    }
  ];
  evolves_from_species: {
    name: string | null;
  };
};
export const BgPokeColor = {
  normal: ["#A8A77A", "#7a7a5e"],
  fighting: ["#C22E28", "#912622"],
  flying: ["#A98FF3", "#3f345c"],
  poison: ["#A33EA1", "#271e3f"],
  ground: ["#E2BF65", "#c49c38"],
  rock: ["#B6A136", "#9b7a28"],
  bug: ["#A6B91A", "#748111"],
  ghost: ["#735797", "#5c3f83"],
  steel: ["#B7B7CE", "#787896"],
  fire: ["#FF6969", "#FD9E5A"],
  water: ["#7CC0FF", "#5F29FF"],
  grass: ["##7CFFD0", "#4A7B42"],
  electric: ["#F7D02C", "#d4ac0a"],
  psychic: ["#F95587", "#c41549"],
  ice: ["#96D9D6", "#3ab9b3"],
  dragon: ["#6F35FC", "#4f1cd1"],
  dark: ["#705746", "#4e392a"],
  fairy: ["#D685AD", "#88315c"],
  unknown: ["#339686", "#1b6d5f"],
  shadow: ["#632ea6", "#431c72"],
};

export type PropsKeyColor = keyof typeof BgPokeColor;

export type FlatListProps = {
  arrayPoke: PokemonProps[];
  RequestAPI: () => void;
};
