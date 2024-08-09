import { useContext, useEffect } from "react";
import Nav from "../../components/navigation/Nav";
import { NavLink } from "react-router-dom";
import { JokeContext } from '../../context/JokeContext.jsx';

const ChuckNorrisJokes = () => {
    const {
        currentJoke,
        bgClass,
        bgHex,
        handleSvgClick,
        handleRestart,
        jokesPool,
        setCategoryAndRestart
    } = useContext(JokeContext);

    useEffect(() => {
        setCategoryAndRestart("chuckNorris");
    }, []);

    const isLastJoke = jokesPool.length === 0;

    return (
        <>
            <section className={`full-height ${bgClass}`}>
                <Nav />
                <article className="flex-between answer">
                    <p className="main-joke">{currentJoke}</p>

                    <article className="white-container">
                        {!isLastJoke && (
                            <div className="play-icon-wrapper" onClick={handleSvgClick}>
                                <svg fill="none" fillRule="evenodd" stroke="black" strokeWidth="0.501" strokeLinejoin="bevel" strokeMiterlimit="10" fontFamily="Times New Roman" fontSize="16" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" version="1.1" overflow="visible" width="70" height="70" viewBox="172.497 -725.673 115.992 115.992">
                                    <defs>
                                    </defs>
                                    <g id="Layer 1" transform="scale(1 -1)">
                                        <g id="Group" strokeLinejoin="round" strokeLinecap="round">
                                            <ellipse rx="58.005" ry="58.005" transform="translate(230.493 667.677) rotate(135)" fill={bgHex} strokeWidth="0.5" stroke="none" />
                                            <g id="Group_1" strokeWidth="8" stroke="#ffffff" fill="#000000">
                                                <path d="M 217.293,696.477 L 250.893,667.677" fill="none" />
                                                <path d="M 217.293,638.877 L 250.893,667.677" fill="none" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        )}

                        {/* buttons RESTART + NEW CATEGORY */}
                        {isLastJoke && (
                            <div className="btn-container">
                                <button className={`btn ${bgClass}`} onClick={handleRestart}>Neustart</button>
                                <NavLink to="/start">
                                    <button className={`btn ${bgClass}`}>Kategoriewahl</button>
                                </NavLink>
                            </div>
                        )}
                    </article>
                </article>

            </section>
        </>
    );
}

export default ChuckNorrisJokes;