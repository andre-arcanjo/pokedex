interface NamedAPIResource {
    name: string
    url: string
}

interface PokemonResult extends NamedAPIResource { }

export interface ListOfPokemons {
    count: number,
    next: string | null,
    previous: string | null,
    results: PokemonResult[]
}

interface OfficialArtwork {
    front_default: string | null
}

interface OtherSprites {
    "official-artwork": OfficialArtwork
}

interface Sprites {
    front_default: string | null
    other: OtherSprites
}

interface PokemonType {
    slot: number,
    type: NamedAPIResource
}

interface PokemonAbility {
    ability: NamedAPIResource,
    is_hidden: boolean,
    slot: number,
}

interface MoveInfo {
    name: string,
    url: string,
}

interface PokemonMove {
    move: MoveInfo
}

export interface PokemonDetail {
    name: string,
    sprites: Sprites,
    types: PokemonType[],
    abilities: PokemonAbility[],
    moves: PokemonMove[]
}