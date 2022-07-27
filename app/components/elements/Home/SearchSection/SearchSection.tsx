import styles from './SearchSection.module.scss';
import {FC} from "react";
import Search from "../../Search/Search";
import Filters from "../../Filters/Filters";
import mapImage from '../../../../../assets/images/map.png';

const SearchSection: FC = () => {
    return (
        <section className={styles.section} style={
            {backgroundImage: `url(${mapImage.src})`}
        }>
            <div>
                <h1>
                    Best places for trip!
                </h1>
                <Search/>
                <Filters/>
            </div>
        </section>
    )
}

export default SearchSection;