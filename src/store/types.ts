interface Person {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: number[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: number;
  id: number;
  mass: string;
  name: string;
  skin_color: string;
  species: number[];
  starships: number[];
  url: string;
  vehicles: number[];
}

interface Film {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: number[];
  planets: number[];
  starships: number[];
  vehicles: number[];
  created: string;
  edited: string;
  url: string;
}

interface FilmResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Film[];
}

interface CardsDataHandlingTypes {
  peopleList: Person[];
  currentPage: number;
  filmList: Film[];
  starshipList: Starship[];
}
interface Starship {
  MGLT: string;
  cargo_capacity: number;
  consumables: string;
  cost_in_credits: number;
  created: string;
  crew: number;
  edited: string;
  hyperdrive_rating: number;
  length: number;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: number;
  films: number[];
  pilots: number[];
  starship_class: string;
  url: string;
}

export type { CardsDataHandlingTypes, Person, Film, FilmResponse, Starship };
