'use client'
import {useState, useEffect} from "react";
import styles from "./circularProgressBar.module.css";

const CircularProgressBar = ({
                               radius = 100,
                               width = 10,
                               progress = 50,
                               progressColor = "darkred",
                               bgColor = "black",
                               children
                             }) => {

    const [progressValue, setProgressValue] = useState(0);

    useEffect(() => {
        const animTick = setInterval(() => {
            setProgressValue(state => {
                if (state < progress) {
                    return state + 1;
                }
                else {
                    clearInterval(animTick);
                }
            })

        }, 7)
    }, [])

  return (
    <div className={styles.circularProgressBarWrapper} style={{
      width: `${2 * radius}px`,
      height: `${2 * radius}px`,
      border: `1px solid ${bgColor}`,
      backgroundImage: `conic-gradient(${progressColor} 0deg, ${progressColor} ${progressValue}deg, ${bgColor} ${progressValue}deg, ${bgColor} 360deg)`
    }}>
      <div className={styles.circularProgressBarInner} style={{
        width: `${2 * radius - width}px`,
        height: `${2 * radius - width}px`,
        top: `${(width / 2) - 0.5}px`,
        left: `${(width / 2) - 0.6}px`,
        backgroundColor: bgColor
      }}>{children}</div>
    </div>
  )
}

export default CircularProgressBar;