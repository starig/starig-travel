export type TypeLocation = {
    city: string;
    country: string;
    regionUn: string;
}

export interface IPlace {
    slug: string;
    location: TypeLocation;
    imagePath: string;
    description: string;
    rating: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    duration: string;
    distance: number;
    googleMapLink: string;
    mapImage: string;
}

export interface IFav {
    slug: string;
    name: string;
}