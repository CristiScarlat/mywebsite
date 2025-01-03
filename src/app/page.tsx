'use client'
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import CircularProgressBar from "../components/circularProgressBar/circularProgressBar";
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

const Home: NextPage = () => {
  const [progress, setProgress] = useState<number[]>(new Array(14).fill(0));

  useEffect(() => {
    const max = [350, 240, 330, 350, 350, 350, 150, 180, 270, 250, 200, 300, 200, 220];
    const tick = setInterval(() => {
      setProgress((state: number[]) => {
        const temp = [...state];
        max.forEach((maxValue: number, index: number) => {
          if(temp[index] < maxValue)temp[index]++;
        })
        return temp;
      })
    }, 5)

    return () => clearInterval(tick);
  }, [])

  return (
      <div className="pb-5">
        <section className="mt-5">
          <div className="d-flex flex-wrap justify-content-center align-items-center flex-column flex-md-row">
            <div>
              <img src="images/me.jpg" alt="me"  style={{width: 270, height: 270, objectFit: "cover", borderRadius: '100%'}}/>
            </div>
            <div className="ms-3 mt-2 p-3 hero">
              <h1 className="text-center" style={{letterSpacing: 2}}>Cristian Scarlat</h1>
              <h3 className="text-center" style={{letterSpacing: 2}}>Software developer </h3>
              {/*<h4 className="text-secondary">Timişoara, Timiş, Romania</h4>*/}
              <div className="my-3 text-center">
                <a
                    href="https://github.com/CristiScarlat"
                    target="_blank"
                    rel="noreferrer"
                >
                  <BsGithub
                      size="1.5rem"
                      className="me-3"
                  />
                </a>
                <a
                    href="https://www.linkedin.com/in/cristian-scarlat-6839a942"
                    target="_blank"
                    rel="noreferrer"
                >
                  <BsLinkedin size="1.5rem"/>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-center align-items-center gap-3 flex-wrap hero mx-3 mx-sm-auto mt-2 mb-5 p-3" style={{maxWidth: "40rem"}}>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[0]}>
            <SiJavascript color='#ffb400' size='1.6rem' title="Javascript"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[1]}>
            <SiTypescript color='#ffb400' size='1.6rem' title="Typescript"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[2]}>
            <SiNextdotjs color='#ffb400' size='1.6rem' title="Next"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[3]}>
            <SiReact color='#ffb400' size='1.6rem' title="React"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[4]}>
            <SiBootstrap color='#ffb400' size='1.6rem' title="Bootstrap"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[5]}>
            <SiTailwindcss color='#ffb400' size='1.6rem' title="Tailwind"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[6]}>
            <SiVite color='#ffb400' size='1.6rem' title="Vite"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[7]}>
            <SiWebpack color='#ffb400' size='1.6rem' title="Webpack"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[8]}>
            <SiElectron color='#ffb400' size='1.6rem' title="Electron"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[9]}>
            <SiExpress color='#ffb400' size='1.6rem' title="Express"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[10]}>
            <SiPostgresql color='#ffb400' size='1.6rem' title="Postgresql"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[11]}>
            <SiFirebase color='#ffb400' size='1.6rem' title="Firebase"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[12]}>
            <SiPython color='#ffb400' size='1.6rem' title="Python"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#ffb400'} bgColor={'black'} width={25} progress={progress[13]}>
            <SiDjango color='#ffb400' size='1.6rem' title="Django"/>
          </CircularProgressBar>
        </section>
      </div>
  );
};

export default Home;
