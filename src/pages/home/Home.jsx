import "./Home.css";
import Nav from "../../components/navigation/Nav";
import SpeechBubble from "../../components/speechBubble/SpeechBubble";
import playIcon from "../../assets/img/play-icon.png";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <section className="full-height bg-dark-blue">
            <Nav />
            <SpeechBubble bubbleText="Kennst du den ...?" />
            <article className="hero-text-wrapper">
                <p>
                    Die besten <br /> zotigsten Witze
                </p>
                <p>
                    Perfekt gegen Langeweile und Trübsal
                </p>
            </article>
            <NavLink to="/start">
                <article className="play-icon-wrapper">
                    <img src={playIcon} alt="Start" className="play-icon" />
                </article>
            </NavLink>
        </section >
    );
}

export default Home;