import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import "./cursor.scss"

const Cursor = () => {

    const [coord, setCoord] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setCoord({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", mouseMove);
        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };

    }, []);

    return (
        <motion.div className="cursor"
            animate={{ x: coord.x + 10, y: coord.y + 10 }}
        >
        </motion.div>
    )
}

export default Cursor
