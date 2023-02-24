export type Hero = {
  id: number;
  name: string;
  slug: string;
  powerstats: Powerstats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: Images;
}

export type Powerstats = {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

export type Appearance = {
  gender: string;
  race: string;
  height?: (string)[] | null;
  weight?: (string)[] | null;
  eyeColor: string;
  hairColor: string;
}

export type Biography = {
  fullName: string;
  alterEgos: string;
  aliases?: (string)[] | null;
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}

export type Work = {
  occupation: string;
  base: string;
}

export type Connections = {
  groupAffiliation: string;
  relatives: string;
}

export type Images = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}
