import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const StateContext = createContext({});

const publicKey = 'ed1109affc29ca51e1a078495b629166';
const privateKey = '99284a3c750622e2b8257b5c436583db72e0fc53';

export const StateProvider = ({ children }) => {
    const [marvelHeroes, setMarvelHeroes] = useState([]);
    const [marvelSpiderVerse, setMarvelSpiderVerse] = useState([]);
    const [marvelComics, setMarvelComics] = useState({});

    useEffect(() => {
        const timestamp = new Date().toString();
        const md5Hash = md5(timestamp + privateKey + publicKey);
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)
            .then((response) => {
                setMarvelHeroes(response.data.data.results)
            }
            );
        axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}&nameStartsWith=spider`)
            .then((response) => {
                setMarvelSpiderVerse(response.data.data.results)
            }
            );
        axios.get(`https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${publicKey}&hash=${md5Hash}`)
            .then(response => {
                setMarvelComics(response.data.data.results)
            }
            )
    }, [])

    return (
        <StateContext.Provider value={{ marvelHeroes, setMarvelHeroes, marvelComics, setMarvelComics, marvelSpiderVerse, setMarvelSpiderVerse }}>
            {children}
        </StateContext.Provider>
    );
};

export function useGlobal() {
    const varState = useContext(StateContext);
    return varState;
}