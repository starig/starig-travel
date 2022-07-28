import React from "react";
import Layout from "../app/components/common/Layout";
import {GetStaticProps, NextPage} from "next";
import {IPlace} from "../app/types/place";
import HeadingSection from "../app/components/elements/Home/HeadingSection/HeadingSection";
import Search from "../app/components/elements/Search/Search";
import Filters from "../app/components/elements/Filters/Filters";
import {API_URL} from "../app/constants";
import PopularPlaces from "../app/components/elements/Home/PopularPlaces/PopularPlaces";

interface IHome {
    places: IPlace[]
}

const Home: NextPage<IHome> = ({places}) => {
    return (
        // @ts-ignore
        <Layout>
            <HeadingSection/>
            <div style={
                {width: '80%', margin: '0 auto'}
            }>
                <Search/>
                <Filters/>
                <PopularPlaces places={places}/>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const result = await fetch(`${API_URL}/places/`)
    const places = await result.json()

    return {
        props: {
            places
        }
    }
}

export default Home
