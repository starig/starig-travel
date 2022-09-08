import Footer from "./footer/Footer";
import {FC} from "react";
import styles from './Layout.module.scss';

const Layout: FC = (props: any) => {
    return (
        <div>
            <div className={styles.wrapper}>{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout;