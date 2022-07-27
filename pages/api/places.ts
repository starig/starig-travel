import {IPlace} from "../../app/types/place";
import japanImage from '../../assets/images/japan.jpg';
import {NextApiRequest, NextApiResponse} from "next";

const places: IPlace[] = [
    {
        slug: 'tokyo',
        description: 'Tokyo is a capital of great Japan!',
        distance: 10,
        imagePath: japanImage.src,
        location: 'Japan',
        rating: 5,
        duration: '10 days',
        googleMapLink: 'blabla',
        mapImage: 'blablabla',
    }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(places)
}