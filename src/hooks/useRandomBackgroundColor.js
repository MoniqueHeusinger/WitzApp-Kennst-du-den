import { useState, useCallback, useEffect } from "react";

const bgClassToHexColor = {
    "bg-orange": "#FF8C00",
    "bg-fuchsia": "#CB0081",
    "bg-light-blue": "#00ABD6",
    "bg-yellow": "#F2B500",
    "bg-violet": "#9900DB",
    "bg-green": "#81C700"
};

const useRandomBackground = () => {
    const [bgClass, setBgClass] = useState("");
    const [prevBgClass, setPrevBgClass] = useState("");

    // Funktion zum Setzen der Hintergrundfarbe auf eine zufällige Farbe
    const setRandomBackground = useCallback(() => {
        const bgClasses = [
            "bg-orange",
            "bg-fuchsia",
            "bg-light-blue",
            "bg-yellow",
            "bg-violet",
            "bg-green"
        ];

        let newBgClass;

        do {
            newBgClass = bgClasses[Math.floor(Math.random() * bgClasses.length)];
        } while (newBgClass === prevBgClass); // Sicherstellen, dass die neue Farbe nicht gleich der vorherigen ist

        setPrevBgClass(bgClass); // Setze die aktuelle Farbe als vorherige Farbe
        setBgClass(newBgClass); // Setze die neue Farbe
    }, []);

    // Setzt die Hintergrundfarbe einmal bei der Initialisierung
    useEffect(() => {
        setRandomBackground();
    }, [setRandomBackground]);

    return {
        bgClass,
        bgHex: bgClassToHexColor[bgClass] || "#00ABD6",
        setBackgroundColor: setRandomBackground
    };
};

export default useRandomBackground;
