import {useRouter} from "next/router";
import styles from './Footer.module.scss';



type navItem = {
    icon: string;
    link: string;
}

const navItems: navItem[] = [
    {
        icon: 'home',
        link: '/'
    },
    {
        icon: 'explore',
        link: '/explore'
    },
    {
        icon: 'place',
        link: '/place/kyoto'
    },
    {
        icon: 'person_outline',
        link: '/profile'
    },
]

const Footer = () => {
    const { push, pathname } = useRouter();

    return (
        <footer className={styles.footer}>
            <nav>
                {
                    navItems.map(item => <button className={pathname === item.link ? styles.active: ''} key={item.icon} onClick={() => push(item.link)}>
                        <span className={'material-icons-outlined'}>{item.icon}</span>
                    </button>)
                }

            </nav>
        </footer>
    )
}

export default Footer;