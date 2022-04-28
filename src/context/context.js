import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const StateContext = createContext({});

const publicKey = 'ea716cd54a0a2799f85adbee54838ad7';
const privateKey = '3eeb4882fb54237c3a208e4a8ec84daa1994b6de';

export const StateProvider = ({ children }) => {
    const [marvelHeroes, setMarvelHeroes] = useState([]);
    const [marvelSpiderVerse, setMarvelSpiderVerse] = useState([]);
    const [marvelComics, setMarvelComics] = useState([]);
    const [marvelEvents, setMarvelEvents] = useState([]);
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
            const heroesResponse = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)

            const spiderResponse = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}&nameStartsWith=spider`)

            const comicsResponse = await axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)

            const eventsResponse = await axios.get(`https://gateway.marvel.com:443/v1/public/events?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)

            Promise.all([heroesResponse, spiderResponse, comicsResponse, eventsResponse]).then(
                
                setMarvelHeroes(heroesResponse.data.data.results),
                setMarvelSpiderVerse(spiderResponse.data.data.results),
                setMarvelComics(comicsResponse.data.data.results),
                setMarvelEvents(eventsResponse.data.data.results),
                )
        } catch (error) {
            console.log(error);
        }
    }

    const mergeData = () => {
        const mergedData = [...marvelHeroes, ...marvelComics, ...marvelEvents];
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
            fetchData
        }}>
            {children}
        </StateContext.Provider>
    );
};

export function useGlobal() {
    const varState = useContext(StateContext);
    return varState;
}