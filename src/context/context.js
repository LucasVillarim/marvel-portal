import { createContext, useState, useContext, useEffect } from 'react';
import axiosInstance from '../services';
import LoadingComponent from '../components/loading/index.jsx';

const StateContext = createContext({});

const publicKey =  'ea716cd54a0a2799f85adbee54838ad7';

export const StateProvider = ({ children }) => {
    const imageUrlComplement = '/portrait_xlarge.jpg';
    const imageUrlComplementSmall = '/portrait_small.jpg';

    const [marvelHeroes, setMarvelHeroes] = useState([]);
    const [marvelSpiderVerse, setMarvelSpiderVerse] = useState([]);
    const [marvelComics, setMarvelComics] = useState([]);
    const [marvelEvents, setMarvelEvents] = useState([]);
    const [marvelCreators, setMarvelCreators] = useState([]);
    const [dataBucket, setDataBucket] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [loading, setLoading] = useState(null);

    useEffect(() => {
        if (!loading && dataBucket.length !== 0) return;

        if (dataBucket.length == 0) {
            fetchData();
            mergeData();
        } else {
            setLoading(false);
        }
    }, [searchInput])
    
    async function fetchData() {
        const timestamp = String(new Date().toLocaleDateString());
        
        try {
            setLoading(true);
            const heroesResponse = await axiosInstance.get(`/characters?ts=${timestamp}&apikey=${publicKey}&limit=50`)
            const spiderResponse = await axiosInstance.get(`/characters?ts=${timestamp}&apikey=${publicKey}&nameStartsWith=spider&limit=50`)
            const comicsResponse = await axiosInstance.get(`/comics?ts=${timestamp}&apikey=${publicKey}&limit=50`)
            const eventsResponse = await axiosInstance.get(`/events?ts=${timestamp}&apikey=${publicKey}&limit=50`)
            const creatorsResponse = await axiosInstance.get(`/creators?ts=${timestamp}&apikey=${publicKey}&limit=50`)

            Promise.all([heroesResponse, spiderResponse, comicsResponse, eventsResponse, creatorsResponse]).then(
                setMarvelHeroes(heroesResponse.data.data.results),
                setMarvelSpiderVerse(spiderResponse.data.data.results),
                setMarvelComics(comicsResponse.data.data.results),
                setMarvelEvents(eventsResponse.data.data.results),
                setMarvelCreators(creatorsResponse.data.data.results),
                setLoading(false)
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
            imageUrlComplement,
            loading,
            imageUrlComplementSmall
        }}>
            {loading ? <LoadingComponent /> : null}
            {children}
        </StateContext.Provider>
    );
};

export function useGlobal() {
    const varState = useContext(StateContext);
    return varState;
}