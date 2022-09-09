import Footer from "./footer/Footer";
import {FC} from "react";
import styles from './Layout.module.scss';

const Layout: FC<{isMaxWidth?: boolean}> = ({isMaxWidth = true, children}) => {
    return (
        <div>
            <div className={styles.wrapper} style={{maxWidth: isMaxWidth && 480}}>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout;