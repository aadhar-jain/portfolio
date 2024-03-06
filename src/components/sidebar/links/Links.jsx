
import { motion, useScroll } from "framer-motion"
const items = ["Home", "Projects", "Contact", "About"];
const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Links = () => {

    return (
        <motion.div className='links' variants={variants} >
            {items.map((item) =>
            (<motion.a
                href={item === 'About' ? 'https://www.linkedin.com/in/aadhar-j/' : `#${item}`}
                key={item}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}>
                {item}

            </motion.a>)
            )}
        </motion.div>
    )
}

export default Links
