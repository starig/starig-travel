import { useRouter } from "next/router";
import Layout from "../../app/components/common/Layout";

const Place = () => {
    const { query: {slug} } = useRouter()
    return (
        // @ts-ignore
        <Layout>
           Place { slug }
        </Layout>
    )
}

export default Place;