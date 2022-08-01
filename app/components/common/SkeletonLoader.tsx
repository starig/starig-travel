import React, {FC} from "react"
import ContentLoader from "react-content-loader"

const MyLoader: FC = (props) => (
    <ContentLoader
        speed={2}
        width={384}
        height={200}
        viewBox="0 0 384 200"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="370" height="416" />
    </ContentLoader>
)

export default MyLoader