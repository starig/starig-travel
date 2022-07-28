import styles from './HeadingSection.module.scss';
import {FC} from "react";
import mapImage from '../../../../../assets/images/map.png';

const HeadingSection: FC = () => {
    return (
        <section className={styles.section} style={
            {backgroundImage: `url(${mapImage.src})`}
        }>
            <div>
                <h1>
                    Best places for trip!
                    test commit
                </h1>
            </div>
        </section>
    )
}

export default HeadingSection;