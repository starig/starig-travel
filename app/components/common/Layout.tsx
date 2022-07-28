import Footer from "./footer/Footer";
import {FC} from "react";

const Layout: FC = (props: any) => {
    return (
        <div>
            <div>{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout;