import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = () => {
    const el = useRef(null);
    useEffect(() => {
        const options = {
            strings: ["I’m a Front-end Developer!","Creating Engaging Websites"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };
    
        const typed = new Typed(el.current, options);
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <span ref={el} />
    );
}

export default TypedText;
