import Layout from "../../app/components/common/Layout";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {API_URL} from "../../app/constants";
import {IPlace} from "../../app/types/place";
import Place from "../../app/components/screens/place/Place/Place";

interface IPlacePage {
    post: IPlace
}

const PlacePage: NextPage<IPlacePage> = ({post} ) => {
    return (
        <Place place={post}/>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`${API_URL}/places`)
    const places = await res.json()

    const paths = places.map(place => ({
        params: {slug: place.slug}
    }))

    return { paths, fallback: true}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const res = await fetch(`${API_URL}/places/${params.slug}`)
    const post = await res.json()
    return {props: {post}}
}

export default PlacePage;