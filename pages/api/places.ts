import {IPlace} from "../../app/types/place";
import {NextApiRequest, NextApiResponse} from "next";

const places: IPlace[] = [
    {
        slug: 'kyoto',
        description: 'Tokyo is a capital of great Japan!',
        distance: 10324,
        location: {country: 'Japan', city: 'Kyoto'},
        imagePath: 'http://localhost:3000/images/places/japan.jpg',
        rating: 5,
        duration: '10 days',
        googleMapLink: 'blabla',
        mapImage: 'blablabla',
    },
    {
        slug: 'venezia',
        description: 'Venezia is a capital of great Japan!',
        distance: 9454,
        location: {country: 'Italy', city: 'Venezia'},
        imagePath: 'http://localhost:3000/images/places/italy.jpg',
        rating: 5,
        duration: '12 days',
        googleMapLink: 'blabla',
        mapImage: 'blablabla',
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}