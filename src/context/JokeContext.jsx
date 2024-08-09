import React, { createContext, useState, useCallback, useEffect } from "react";
import useRandomBackground from "../hooks/useRandomBackgroundColor.js";
import jokesData from "../data/jokes_data.js";

const JokeContext = createContext();

const JokeProvider = ({ children }) => {
    const { bgClass, bgHex, setBackgroundColor } = useRandomBackground();

    const [currentJoke, setCurrentJoke] = useState("");
    const [currentJokeAnswer, setCurrentJokeAnswer] = useState("");
    const [currentJokeData, setCurrentJokeData] = useState(null);
    const [shownJokes, setShownJokes] = useState([]);
    const [jokesPool, setJokesPool] = useState([]);
    const [category, setCategory] = useState("classicJokes");


    useEffect(() => {
        if (jokesData && jokesData.jokes) {
            const filteredJokes = category === "all"
                ? jokesData.jokes
                : jokesData.jokes.filter(joke => joke.category === category);
            setJokesPool(filteredJokes);
            showNewJoke(filteredJokes);
        } else {
            console.error("Fehler: Witze-Daten sind nicht verfügbar.");
        }

    }, [category]);

    const showNewJoke = (jokes) => {
        if (jokes.length === 0) {
            setCurrentJoke("Das war's! Probiere eine weitere Kategorie aus oder starte die aktuelle Kategorie neu.");
            setCurrentJokeData(null);
            setCurrentJokeAnswer("")
            return;
        }
        const randomIndex = Math.floor(Math.random() * jokes.length);
        const newJoke = jokes[randomIndex];

        setCurrentJoke(newJoke.jokeText.mainText);
        setCurrentJokeAnswer(newJoke.jokeText.jokeAnswer || "");
        setCurrentJokeData(newJoke);

        const remainingJokes = jokes.filter((_, index) => index !== randomIndex);
        setJokesPool(remainingJokes);
        setShownJokes(prev => [...prev, newJoke.jokeText.mainText]);
    };

    const handleSvgClick = () => {
        if (jokesPool.length === 0) {
            console.log("handleSvgClick - jokesPool.length ist 0");
            return;
        }
        setBackgroundColor();
        showNewJoke(jokesPool);
    };

    const handleRestart = () => {
        if (jokesData && jokesData.jokes) {
            let filteredJokes;

            if (category === "all") {
                filteredJokes = jokesData.jokes;
            } else {
                filteredJokes = jokesData.jokes.filter(joke => joke.category === category);
            }

            setShownJokes([]);
            setJokesPool(filteredJokes);
            showNewJoke(filteredJokes);
        }
    };

    const setCategoryAndRestart = (newCategory) => {
        setCategory(newCategory);
        handleRestart();
    };

    return (
        <JokeContext.Provider value={{
            currentJoke,
            currentJokeAnswer,
            currentJokeData,
            bgClass,
            bgHex,
            handleSvgClick,
            handleRestart,
            setCategoryAndRestart,
            jokesPool,
            category
        }}>
            {children}
        </JokeContext.Provider>
    );
};

export { JokeContext, JokeProvider };