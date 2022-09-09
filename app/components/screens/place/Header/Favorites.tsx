import React, {FC, useEffect, useState} from 'react';
import {BsBookmarkStar} from "react-icons/bs";
import styles from './Header.module.scss';
import {IFav} from "../../../../types/place";
import Link from "next/link";
import {useRouter} from "next/router";

const Favorites: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {asPath} = useRouter();
    const data: IFav[] = [
        {
            name: 'Japan, Tokyo',
            slug: 'kyoto'
        },
        {
            name: 'Italy, Venezia',
            slug: 'venezia'
        }
    ];
    useEffect(() => {
        setIsOpen(false);
    }, [asPath])
    return (
        <div className={styles.bookmark}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.buttonWrapper}>
                    <BsBookmarkStar size={20} color={'#e8e8e8'} />
                </span>
            </button>
            {
                isOpen && <ul>
                    {
                        data.map(item => (
                            <li key={item.slug}>
                                <Link href={`/place/${item.slug}`}>
                                    <a>{item.name}</a>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>
    )
}

export default Favorites;