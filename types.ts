export interface ChatMessage {
  role: 'user' | 'bot';
  content: string;
}

export interface Chunk {
  content: string;
}

// Types for Galactic Codex Data
export type Expansion = "Core" | "PoK" | "Codex I" | "Codex II" | "Codex III" | "Base Game" | "Prophecy of Kings";
export type CardType = "Action" | "Secret Objective" | "Public Objective I" | "Public Objective II" | "Promissory Note" | "Agenda";
export type TechType = "Biotic" | "Cybernetic" | "Propulsion" | "Warfare";
export type UnitType = "Infantry" | "Fighter" | "Carrier" | "Destroyer" | "Cruiser" | "Dreadnought" | "Flagship" | "War Sun" | "PDS" | "Space Dock" | "Mech";
export type PlanetTrait = "Cultural" | "Hazardous" | "Industrial" | "Demilitarized Zone";
export type PlanetTech = "Biotic" | "Cybernetic" | "Propulsion" | "Warfare";
export type Wormhole = "Alpha" | "Beta" | "Delta";
export type ExplorationType = "Cultural" | "Hazardous" | "Industrial" | "Frontier";

export interface ActionCard {
  name: string;
  count: number;
  type: CardType;
  text: string;
  expansion: Expansion;
  image?: string;
}

export interface Agenda {
  name: string;
  type: "Law" | "Directive";
  text: string;
  expansion: Expansion;
  elect: string;
  image?: string;
}

export interface ExplorationCard {
  name: string;
  type: ExplorationType;
  text: string;
  resolution: string;
  expansion: Expansion;
  image?: string;
}

export interface Faction {
  name: string;
  abilities: { name: string; text: string }[];
  commodities: number;
  home: number;
  leaders: {
    agents: { name: string; text: string }[];
    commanders: { name:string; text: string }[];
    heroes: { name: string; text: string; unlocks: string[] }[];
  };
  promissory: { name: string; text: string };
  setup: string[];
  sheet: string;
  starting: {
    fleet: { [key: string]: number };
    tech: string[];
    units: { [key: string]: number };
  };
  units: { name: string; text: string; type: UnitType }[];
  technologies?: {
    name: string;
    type: TechType;
    prereqs: { [key in TechType]?: number };
    text: string;
  }[];
  image?: string;
}

export interface Objective {
    name: string;
    type: "Public Objective I" | "Public Objective II" | "Secret Objective";
    condition: string;
    points: number;
    expansion: Expansion;
    image?: string;
}

export interface Planet {
  name: string;
  resources: number;
  influence: number;
  trait: PlanetTrait | null;
  tech: PlanetTech | null;
  type: "Planet";
  system: number;
  expansion: Expansion;
  image?: string;
}

export interface PromissoryNote {
    name: string;
    faction: string;
    text: string;
    type: CardType;
    expansion: Expansion;
    image?: string;
}

export interface Relic {
    name: string;
    text: string;
    type: "Relic";
    expansion: Expansion;
    image?: string;
}

export interface StrategyCard {
    name: string;
    initiative: number;
    primary: string;
    secondary: string;
    expansion: Expansion;
    image?: string;
}

export interface Technology {
    name: string;
    type: TechType;
    prereqs: { [key in TechType]?: number };
    text: string;
    expansion: Expansion;
    image?: string;
}

export interface Unit {
    name: string;
    type: UnitType;
    stats: {
        cost: number | null;
        combat: number | null;
        move: number | null;
        capacity: number | null;
    };
    abilities: string[];
    upgrade: string | null;
    expansion: Expansion;
    image?: string;
}

export interface Attachment {
    name: string;
    text: string;
    type: "Attachment";
    expansion: Expansion;
    image?: string;
}

export interface Component {
    name: string;
    count: number;
    type: "Component";
    expansion: Expansion;
    image?: string;
}


export interface CodexEntry {
  id: string;
  name: string;
  type: 'Faction' | 'Technology' | 'Action Card' | 'Unit' | 'Planet' | 'Agenda' | 'Promissory Note' | 'Relic' | 'Strategy Card' | 'Objective' | 'Exploration' | 'Attachment' | 'Component';
  expansion: Expansion | string;
  data: Faction | Technology | ActionCard | Unit | Planet | Agenda | PromissoryNote | Relic | StrategyCard | Objective | ExplorationCard | Attachment | Component;
  searchText: string;
  imageUrl?: string;
}