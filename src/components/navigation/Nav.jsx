import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useContext, useState } from "react";
import { JokeContext } from "../../context/JokeContext.jsx";

const Nav = () => {
    const [menuIsOpen, setIsMenuOpen] = useState(false);
    const { setCategoryAndRestart } = useContext(JokeContext);

    const openMenu = () => {
        setIsMenuOpen(true);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    // Handler für den Klick auf "Alle Witze"
    const handleAllJokesClick = () => {
        setCategoryAndRestart("all");
        closeMenu(); // Schließe das Menü
    }

    return (
        <>
            <nav>
                <NavLink to="/"><h4>Kennst du den ...?</h4></NavLink>

                {/* Hamburger Menu icon */}
                <div onClick={openMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,255.99365,255.99365" width="40px" height="40px"><g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" ><g transform="scale(8.53333,8.53333)"><path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path></g></g></svg>
                </div>


                {/* Menu open */}
                {menuIsOpen &&
                    <div id="menu" className={`overlay ${menuIsOpen ? 'menu-open' : ''}`}>
                        <a href="javascript:void(0)" className="closebtn" onClick={closeMenu}>&times;</a>

                        <div className="overlay-content">
                            <NavLink to="/">Neustart</NavLink>
                            {/* hier muss die Logik rein, dass die aktuelle Witze-Runde neu gestartet wird in der aktuellen Kategorie */}

                            <NavLink to="/alle-witze" onClick={handleAllJokesClick} className={({ isActive }) => isActive ? "active-link" : ""}>Alle Witze</NavLink>
                            <NavLink to="/raetsel" className={({ isActive }) => isActive ? "active-link" : ""}>Rätsel</NavLink>
                            <NavLink to="/sprueche" className={({ isActive }) => isActive ? "active-link" : ""}>Sprüche</NavLink>
                            <NavLink to="/chuck-norris" className={({ isActive }) => isActive ? "active-link" : ""}>Chuck Norris</NavLink>
                        </div>
                    </div>
                }


            </nav>
        </>
    );
}

export default Nav;