import {ChangeEvent, FC, useState} from "react";
import styles from './Search.module.scss';
import {IPlace} from "../../../types/place";
import {TypeSetState} from "../../../types/common";

interface ISearch {
    setPlaces: TypeSetState<IPlace[]>
    initialPlaces: IPlace[]
    setIsLoading: TypeSetState<Boolean>
}

const Search: FC<ISearch> = ({setPlaces, initialPlaces, setIsLoading}) => {
    const [searchTerm, setSearchTerm] = useState('')
    const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsLoading(true)
        const value = e.target.value
        if (value) {
            setSearchTerm(value)
            setPlaces(initialPlaces.filter(place => place.location.city.toLowerCase().includes(value)
                || place.location.country.toLowerCase().includes(value)))
        } else {
            setPlaces(initialPlaces)
        }
        setIsLoading(false)
    }

    return (
        <div className={styles.search}>
            <span className={'material-icons-outlined'}>search</span>
            <input type={'text'}
                   onChange={e => {
                       setSearchTerm(e.target.value)
                       searchHandler(e)
                   }}
                   value={searchTerm}
                   placeholder={'Search place...'}/>
        </div>
    )
}

export default Search;