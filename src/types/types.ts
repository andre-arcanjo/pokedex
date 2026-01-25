interface resultsPokemons {
    name: string,
    url: string
}

export interface ListOfPokemons {
    count: number,
    next: string,
    previous: null,
    results: resultsPokemons[]
}

export interface Pokemon {
    name: string,
    img: string,
    types: string,
    habilities: string,
    moves: string
}