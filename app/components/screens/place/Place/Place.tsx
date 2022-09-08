import React, {FC} from 'react';
import {IPlace} from "../../../../types/place";
import Layout from "../../../common/Layout";
import Information from "../Information/Information";
import Header from "../Header/Header";
import BookTrip from "../BookTrip/BookTrip";

interface IPlacePage {
    place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
    return (
        <Layout>
            <Header />
            <Information place={place} />
            <BookTrip />
        </Layout>
    )
}

export default Place;