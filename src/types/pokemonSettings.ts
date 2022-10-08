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
  normal: ["rgba(168,167,122, 1)", "rgba(122,122,94, 1)"],
  fighting: ["rgba(194,46,40, 1)", "rgba(145,38,34, 1)"],
  flying: ["rgba(169,143,243, 1)", "rgba(63,52,92, 1)"],
  poison: ["rgba(163,62,161, 1)", "rgba(39,30,63, 1)"],
  ground: ["rgba(226,191,101, 1)", "rgba(196,156,56, 1)"],
  rock: ["rgba(182,161,54, 1)", "rgba(155,122,40, 1)"],
  bug: ["rgba(166,185,26, 1)", "rgba(116,129,17, 1)"],
  ghost: ["rgba(115,87,151, 1)", "rgba(92,63,131, 1)"],
  steel: ["rgba(183,183,206, 1)", "rgba(120,120,150, 1)"],
  fire: ["rgba(255,105,105, 1)", "rgba(253,158,90, 1)"],
  water: ["rgba(124,192,255, 1)", "rgba(95,41,255, 1)"],
  grass: ["#rgba(124,255,208, 1)", "rgba(74,123,66, 1)"],
  electric: ["rgba(247,208,44, 1)", "rgba(212,172,10, 1)"],
  psychic: ["rgba(249,85,135, 1)", "rgba(196,21,73, 1)"],
  ice: ["rgba(150,217,214, 1)", "rgba(58,185,179, 1)"],
  dragon: ["rgba(111,53,252, 1)", "rgba(79,28,209, 1)"],
  dark: ["rgba(112,87,70, 1)", "rgba(78,57,42, 1)"],
  fairy: ["rgba(214,133,173, 1)", "rgba(136,49,92, 1)"],
  unknown: ["rgba(51,150,134, 1)", "rgba(27,109,95, 1)"],
  shadow: ["rgba(99,46,166, 1)", "rgba(67,28,114, 1)"],
};

export type PropsKeyColor = keyof typeof BgPokeColor;

export type FlatListProps = {
  arrayPoke: PokemonProps[];
  RequestAPI: () => void;
};
