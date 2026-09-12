export interface Character {
    alignment?: string;
    allies?: any[];
    createdAt?: string;
    data?: Record<string, any>;
    enemies?: any[];
    films?: any[];
    id?: number;
    imageUrl?: string;
    info?: Record<string, any>;
    name?: string;
    parkAttractions?: any[];
    shortFilms?: any[];
    sourceUrl?: string;
    tvShows?: any[];
    updatedAt?: string;
    url?: string;
    v?: number;
    videoGames?: any[];
}
export interface CharacterLoadMatch {
    id: number;
}
export interface CharacterListMatch {
    alignment?: string;
    ally?: string;
    enemy?: string;
    film?: string;
    name?: string;
    page?: number;
    page_size?: number;
    park_attraction?: string;
    short_film?: string;
    tv_show?: string;
    video_game?: string;
}
