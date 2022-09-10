import {IPlace} from "../../../app/types/place";
import {NextApiRequest, NextApiResponse} from "next";

export const places: IPlace[] = [
    {
        slug: 'kyoto',
        description: 'Invidunt dignissim orci dictumst eruditi possim quaeque vulputate purus alia duo ' +
            'iaculis class phasellus eu nisl menandri saperet oporteat aperiri partiendo quaerendum elementum ' +
            'ius dapibus ac ocurreret an nostrum eripuit nunc blandit maecenas donec feugiat persecuti tation ' +
            'primis arcu simul nihil eius alienum qualisque justo in fusce sumo splendide ea',
        distance: 10324,
        location: {country: 'Japan', city: 'Kyoto', regionUn: 'Asia'},
        imagePath: 'http://localhost:3000/images/places/japan.jpg',
        rating: 5,
        duration: '10 days',
        googleMapLink: 'blabla',
        mapImage: 'blablabla',
    },
    {
        slug: 'venezia',
        description: 'Appareat nullam ne accumsan legere mutat eripuit ad legimus mazim sem vis explicari' +
            ' tristique ipsum scripserit sit option accusata pulvinar pri vix justo mi himenaeos prodesset consectetur' +
            ' mucius delicata libero quisque ea eirmod massa nisl idque fusce convenire percipit porta' +
            ' lobortis nihil possim corrumpit viderer nunc nascetur tota quem scripserit',
        distance: 9454,
        location: {country: 'Italy', city: 'Venezia', regionUn: 'Europe'},
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