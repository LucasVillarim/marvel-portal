import { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../services';
import md5 from 'md5';

const StateContext = createContext({});

const publicKey = 'ea716cd54a0a2799f85adbee54838ad7';
const privateKey = '3eeb4882fb54237c3a208e4a8ec84daa1994b6de';

export const StateProvider = ({ children }) => {
    const imageUrlComplement = '/portrait_xlarge.jpg';

    const [marvelHeroes, setMarvelHeroes] = useState([]);
    const [marvelSpiderVerse, setMarvelSpiderVerse] = useState([]);
    const [marvelComics, setMarvelComics] = useState([]);
    const [marvelEvents, setMarvelEvents] = useState([]);
    const [marvelCreators, setMarvelCreators] = useState([]);
    const [dataBucket, setDataBucket] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        if (dataBucket.length == 0) {
            fetchData();
            mergeData();
        }
    }, [searchInput])

    async function fetchData() {
        const timestamp = new Date().toString();
        const md5Hash = md5(timestamp + privateKey + publicKey);

        try {
            const heroesResponse = await axiosInstance.get(`/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}&limit=50`)
            const spiderResponse = await axiosInstance.get(`/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}&nameStartsWith=spider`)
            const comicsResponse = await axiosInstance.get(`/comics?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)
            const eventsResponse = await axiosInstance.get(`/events?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)
            const creatorsResponse = await axiosInstance.get(`/creators?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)

            Promise.all([heroesResponse, spiderResponse, comicsResponse, eventsResponse, creatorsResponse]).then(
                setMarvelHeroes(heroesResponse.data.data.results),
                setMarvelSpiderVerse(spiderResponse.data.data.results),
                setMarvelComics(comicsResponse.data.data.results),
                setMarvelEvents(eventsResponse.data.data.results),
                setMarvelCreators(creatorsResponse.data.data.results),
            )
        } catch (error) {
            console.log(error);
        }
    }

    const mergeData = () => {
        const mergedData = [...marvelHeroes, ...marvelComics, ...marvelEvents, ...marvelCreators];
        setDataBucket(mergedData);
        return dataBucket;
    }

    return (
        <StateContext.Provider value={{
            marvelHeroes,
            setMarvelHeroes,
            marvelComics,
            setMarvelComics,
            marvelSpiderVerse,
            setMarvelSpiderVerse,
            marvelEvents,
            setMarvelEvents,
            dataBucket,
            mergeData,
            searchInput,
            setSearchInput,
            fetchData,
            marvelCreators,
            setMarvelCreators,
            imageUrlComplement
        }}>
            {children}
        </StateContext.Provider>
    );
};

export function useGlobal() {
    const varState = useContext(StateContext);
    return varState;
}