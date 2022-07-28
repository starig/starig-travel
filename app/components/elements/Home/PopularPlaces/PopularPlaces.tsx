import {FC} from "react";
import {IPlace} from "../../../../types/place";
import styles from './PopularPlaces.module.scss';
import Link from "next/link";

interface IPopularPlaces {
    places: IPlace[]
}

const PopularPlaces: FC<IPopularPlaces> = ({places}) => {
    return (
        <div className={styles.wrapper}>
            <h2>Popular places</h2>
            {
                places.map(place => (
                    <Link href={`/place/${place.slug}`}key={place.slug}>
                        <a className={styles.item} style={{backgroundImage: `url(${place.imagePath})`}}>
                            <div className={styles.heading}>{place.location.city}, {place.location.country}</div>
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}

export default PopularPlaces;