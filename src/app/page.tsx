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
  const progress = [350, 240, 330, 350, 350, 350, 150, 180, 270, 250, 200, 300, 200, 220];

  return (
      <div className="pb-5">
        <section className="mt-5">
          <div className="d-flex flex-wrap justify-content-center align-items-center flex-column flex-md-row gap-3">
            <div>
              <img src="images/me.jpg" alt="me"  style={{width: 270, height: 270, objectFit: "cover", borderRadius: '100%'}}/>
            </div>
            <div className="mt-2 p-3 hero">
              <h1 className="text-center" style={{letterSpacing: 2}}>Cristian Scarlat</h1>
              <h3 className="text-center" style={{letterSpacing: 2}}>Software developer </h3>
              <h5 className="text-secondary text-sm-center">Timişoara, Timiş, Romania</h5>
              <div className="my-3 text-center">
                <a
                    href="https://github.com/CristiScarlat"
                    target="_blank"
                    rel="noreferrer"
                >
                  <BsGithub
                      size="1.5rem"
                      className="me-5"
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
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[0]}>
            <SiJavascript color='#2a9a2a' size='1.6rem' title="Javascript"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[1]}>
            <SiTypescript color='#2a9a2a' size='1.6rem' title="Typescript"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[2]}>
            <SiNextdotjs color='#2a9a2a' size='1.6rem' title="Next"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[3]}>
            <SiReact color='#2a9a2a' size='1.6rem' title="React"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[4]}>
            <SiBootstrap color='#2a9a2a' size='1.6rem' title="Bootstrap"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[5]}>
            <SiTailwindcss color='#2a9a2a' size='1.6rem' title="Tailwind"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[6]}>
            <SiVite color='#2a9a2a' size='1.6rem' title="Vite"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[7]}>
            <SiWebpack color='#2a9a2a' size='1.6rem' title="Webpack"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[8]}>
            <SiElectron color='#2a9a2a' size='1.6rem' title="Electron"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[9]}>
            <SiExpress color='#2a9a2a' size='1.6rem' title="Express"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[10]}>
            <SiPostgresql color='#2a9a2a' size='1.6rem' title="Postgresql"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[11]}>
            <SiFirebase color='#2a9a2a' size='1.6rem' title="Firebase"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[12]}>
            <SiPython color='#2a9a2a' size='1.6rem' title="Python"/>
          </CircularProgressBar>
          <CircularProgressBar radius={48} progressColor={'#2a9a2a'} bgColor={'black'} width={25} progress={progress[13]}>
            <SiDjango color='#2a9a2a' size='1.6rem' title="Django"/>
          </CircularProgressBar>
        </section>
      </div>
  );
};

export default Home;
