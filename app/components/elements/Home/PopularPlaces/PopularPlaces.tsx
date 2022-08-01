import {FC} from "react";
import {IPlace} from "../../../../types/place";
import styles from './PopularPlaces.module.scss';
import Link from "next/link";
import SkeletonLoader from "../../../common/SkeletonLoader";

interface IPopularPlaces {
    places: IPlace[]
    isLoading: boolean
}

const PopularPlaces: FC<IPopularPlaces> = ({places, isLoading}) => {
    return (
        <div className={styles.wrapper}>
            <h2>Popular places</h2>
            {
                isLoading ? places.map(place => <SkeletonLoader key={place.slug}/>)
                    : places.length ? places.map(place => (
                    <Link href={`/place/${place.slug}`} key={place.slug}>
                        <a className={styles.item} style={{backgroundImage: `url(${place.imagePath})`}}>
                            <div className={styles.heading}>{place.location.city}, {place.location.country}</div>
                        </a>
                    </Link>
                    )) : <div className={styles.notFound}>Not found any place</div>
            }
        </div>
    )
}

export default PopularPlaces;