import { useRef } from "react"
import "./project.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

const items = [
    {
        id: 1,
        title: "ChatPal",
        desc: "Encryption-Decryption web application to ensure secure communication. Incorporates characters from over 161 modern and historical scripts. Retains the original text formatting during decryption process",
        phoneImg: "./chatpalPhone.png",
        macImg: "./chatpalMac.png",
        url: "https://aadhar-jain.github.io/ChatPalWeb/",
    },
    {
        id: 2,
        title: "CHESS CPP",
        desc: " Multiplayer chess game that uses CLI. Uses an engaging retro theme, offering a unique and visually nostalgic playing environment",
        phoneImg: "",
        macImg: "./chessMac.png",
        url: "https://github.com/aadhar-jain/CHESS-CPP",
    },
    {
        id: 3,
        title: "Evidence",
        desc: "An E-learning platform, to cater to students from Class 1 to 12th and competitive preparation. Vibrant UI components to create an engaging experience for stressed-out students",
        phoneImg: "./evidencePhone.png",
        macImg: "./evidenceMac.png",
        url: "https://aadhar-jain.github.io/Evidence/",
    },
]

const Single = ({ item }) => {
    const ref = useRef();
    const ref2 = useRef();

    const { scrollYProgress: scrollYProgressTarget1 } = useScroll({
        target: ref,
    });
    const { scrollYProgress: scrollYProgressTarget2 } = useScroll({
        target: ref2,
        offset : ["start end " , "center start"]
    });

    const textY = useTransform(scrollYProgressTarget1, [0, 1], [-200, 200]);
    const textP = useTransform(scrollYProgressTarget2, [0, 1], [200, -100]);

    return (
        <section>
            <div className="container" ref={ref2}>
                <div className="wrapper" >
                    <div className="imgWrapper" ref={ref} >
                        {item.phoneImg !== '' && (
                            <motion.img className="phoneScreen" style={{ y: textP }} src={item.phoneImg} alt="" />
                        )}
                        <img className="macScreen" src={item.macImg} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{ y: textY }}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button><img src="./right-up.png" alt="" />
                            <a href={item.url}>Try {item.title}</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Project = () => {

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const ScaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 25,
    });

    return (
        <div className="portfolio" >
            <div className="progress" >
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: ScaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Project
