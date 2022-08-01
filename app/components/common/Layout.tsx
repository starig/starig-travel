import Footer from "./footer/Footer";
import {FC} from "react";

const Layout: FC = (props: any) => {
    return (
        <div>
            <div style={{maxWidth: 480, margin: '0 auto'}}>{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout;