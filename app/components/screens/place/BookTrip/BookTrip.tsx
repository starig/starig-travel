import React from 'react';
import styles from './BookTrip.module.scss';
import { BsArrowRightShort } from 'react-icons/bs';


const BookTrip = () => {
    return (
        <button className={styles.button}>
            <span className={styles.text}>
                Book a trip
            </span>
            <span className={styles.icon}>
                <BsArrowRightShort />
            </span>
        </button>
    )
}

export default BookTrip;