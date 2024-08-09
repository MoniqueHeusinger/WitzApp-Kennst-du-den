import "./JokeStart.css";
import Nav from "../../components/navigation/Nav";
import SpeechBubble from "../../components/speechBubble/SpeechBubble";
import { NavLink } from "react-router-dom";

const JokeStart = () => {
    return (
        <>
            <section className="full-height bg-orange flex-between">
                <Nav />
                <article className="">
                    <SpeechBubble bubbleText="Wähle eine Kategorie" />

                    <div className="white-container">
                        <NavLink to="/alle-witze"><p className="category-item">Alle</p></NavLink>
                        <NavLink to="/raetsel"><p className="category-item">Rätsel</p></NavLink>
                        <NavLink to="/sprueche"><p className="category-item">Sprüche</p></NavLink>
                        <NavLink to="/chuck-norris"><p className="category-item">Chuck Norris</p></NavLink>
                    </div>
                </article>

            </section>

        </>
    );
}

export default JokeStart;