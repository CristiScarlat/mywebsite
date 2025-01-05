import styles from "./page.module.css";
import {
    SiTypescript,
    SiJavascript,
    SiNextdotjs,
    SiExpress,
    SiReact,
    SiBootstrap,
    SiTailwindcss,
    SiVite,
    SiWebpack,
    SiElectron,
    SiPostgresql,
    SiFirebase,
    SiPython,
    SiDjango
} from "react-icons/si";

const Portfolio = () => {
    return (
        <>
        <h4 className="text-center text-secondary my-4">Portfolio</h4>
        <div className={`hero ${styles.container}`}>
            <a href="https://mealswithdrinks.com" target="_blank"
               className={styles.gradientBox}>
                <div className="flex-fill">
                    <img src="/images/home_drinks.jpg" className={styles.cardImg}/>
                </div>
                <div>
                    <p>mealswithdrinks.com</p>
                    <div className="d-flex justify-content-center gap-3 p-2">
                        <SiTypescript size="1.5rem"/>
                        <SiNextdotjs size="1.5rem"/>
                        <SiTailwindcss size="1.5rem"/>
                    </div>
                </div>
            </a>

            <a href="https://wimapp.tech/" target="_blank" className={styles.gradientBox}>
                <div className="flex-fill">
                    <img src="/images/wimapp.png" className={styles.cardImg}/>
                </div>
                <div>
                    <p>wimapp.com</p>
                    <div className="d-flex justify-content-center gap-3 p-2">
                        <SiTypescript size="1.5rem"/>
                        <SiReact size="1.5rem"/>
                        <SiBootstrap size="1.5rem"/>
                    </div>
                </div>
            </a>

            <a href="https://clinica-dermatiq.ro" target="_blank" className={styles.gradientBox}>
                <div className="flex-fill">
                    <img src="/images/dermatiq.png" className={styles.cardImg}/>
                </div>
                <div>
                    <p>clinica-dermatiq.ro</p>
                    <div className="d-flex justify-content-center gap-3 p-2">
                        <SiJavascript size="1.5rem" title="javascript"/>
                        <SiNextdotjs size="1.5rem" title="nextjs"/>
                        <SiBootstrap size="1.5rem" title="bootstrap"/>
                        <SiFirebase size="1.5rem" title="firebase"/>
                    </div>
                </div>
            </a>

            <a href="https://olidental.ro" target="_blank" className={styles.gradientBox}>
                <div className="flex-fill">
                    <img src="/images/olidental.png" className={styles.cardImg}/>
                </div>
                <div>
                    <p>olidental.ro</p>
                    <div className="d-flex justify-content-center gap-3 p-2">
                        <SiJavascript size="1.5rem"/>
                        <SiNextdotjs size="1.5rem"/>
                        <SiBootstrap size="1.5rem"/>
                    </div>
                </div>
            </a>

            <a href="https://galeriadincurte.ro" target="_blank" className={styles.gradientBox}>
                <div className="flex-fill">
                    <img src="/images/art.png" className={styles.cardImg}/>
                </div>
                <div>
                    <p>Galeria din curte</p>
                    <div className="d-flex justify-content-center gap-3 p-2">
                        <SiJavascript size="1.5rem"/>
                        <SiNextdotjs size="1.5rem"/>
                        <SiBootstrap size="1.5rem"/>
                    </div>
                </div>
            </a>

            <a href="https://oanabologbleich.com" target="_blank" className={styles.gradientBox}>
                <div className="flex-fill">
                    <img src="/images/oanabologbleigh.jpg" className={`${styles.cardImg} rounded-circle`}
                         style={{width: 250, height: 250, objectFit: "cover"}}/>
                </div>
                <div>
                    <p>oanabologbleich.com</p>
                    <div className="d-flex justify-content-center gap-3 p-2">
                        <SiJavascript size="1.5rem"/>
                        <SiNextdotjs size="1.5rem"/>
                        <SiBootstrap size="1.5rem"/>
                    </div>
                </div>
            </a>

            <a href="https://tucubleich.com" target="_blank" className={styles.gradientBox}>
                <div className="flex-fill">
                    <img src="/images/tucu_poza_buna_crop.jpeg" className={`${styles.cardImg} rounded-circle`}
                         style={{width: 250, height: 250, objectFit: "cover"}}/>
                </div>
                <div>
                    <p>tucubleich.com</p>
                    <div className="d-flex justify-content-center gap-3 p-2">
                        <SiJavascript size="1.5rem"/>
                        <SiNextdotjs size="1.5rem"/>
                        <SiBootstrap size="1.5rem"/>
                    </div>
                </div>
            </a>

            <a href="https://cristiscarlat.github.io/vite-vanilla-puzzle-game/" target="_blank"
               className={styles.gradientBox}>
                <div className="flex-fill">
                    <img src="/images/puzzle.jpg" className={styles.cardImg}/>
                </div>
                <div>
                    <p>Pexels Photos Puzzle Game</p>
                    <div className="d-flex justify-content-center gap-3 p-2">
                        <SiJavascript size="1.5rem"/>
                        <SiVite size="1.5rem"/>
                    </div>
                </div>
            </a>
        </div>
        </>
    )
}

export default Portfolio;