import styles from './HeadingSection.module.scss';
import {FC} from "react";
import mapImage from '../../../../../public/images/places/map.png';

const HeadingSection: FC = () => {
    return (
        <section className={styles.section} style={
            {backgroundImage: `url(${mapImage.src})`}
        }>
            <div>
                <h1>
                    Best places for trip!
                </h1>
            </div>
        </section>
    )
}

export default HeadingSection;