import styles from "./page.module.css";
import {BsGithub, BsLinkedin, BsDownload} from "react-icons/bs";
import DownloadBtn from "../../components/downloadBtn/downloadBtn";


const About = () => {

        return(
            <div className={styles.container}>
                <div className="d-flex flex-wrap text-center">
                    <img src="images/me.jpg" alt="me" className={styles.photo} />
                    <div className={styles.headerTitle}>
                        <h1>Cristian Scarlat</h1>
                        <h2>Software developer </h2>
                        <h4>Timişoara, Timiş, Romania</h4>
                        <div className="d-flex justify-content-center gap-3 my-3 d-print-none">
                            <a
                                href="https://github.com/CristiScarlat"
                                target="_blank"
                                rel="noreferrer"
                                data-set="about"
                                className="nav-link current"
                            >
                                <BsGithub
                                    style={{ height: "1.5rem", width: "1.5rem" }}
                                    className="me-3"
                                    color="white"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/cristian-scarlat-6839a942"
                                target="_blank"
                                rel="noreferrer"
                                data-set="about"
                                className="nav-link current"
                            >
                                <BsLinkedin style={{ height: "1.5rem", width: "1.5rem" }} color="white"/>
                            </a>
                        </div>
                        <DownloadBtn />
                    </div>
                </div>
                <hr />
                <section className={`${styles.section} d-print-block d-none `}>
                    <h3 id="summary" className={styles.sectionsTitles}>Contact</h3>
                    <div className="">
                        <p>0722205498 (Mobile)</p>
                        <p>cristiscarlat1978@gmail.com</p>
                        <p>www.linkedin.com/in/cristian-scarlat-6839a942 (LinkedIn)</p>
                        <p>cristiscarlat.github.io/ (github)</p>
                        <p>https://cristiscarlat.com (personal website)</p>
                    </div>
                </section>
                <section >
                    <article>
                        <h3 id="summary" className={styles.sectionsTitles}>Summary</h3>
                        <p>
                            I am a passionate and versatile software developer with a strong foundation in both
                            front-end development and embedded systems programming. With over three years of experience
                            programming AVR microcontrollers in C and a subsequent transition to web development, I
                            bring a unique perspective that combines low-level hardware knowledge with modern web
                            technologies.
                        </p>
                        <p>
                            In the web domain, I specialize in building engaging and responsive user interfaces using
                            React.js, Next.js, and UI frameworks like Bootstrap, Material-UI, and Tailwind CSS. My
                            backend expertise includes Node.js, Express, PostgreSQL, Firebase, and Python with Django,
                            allowing me to deliver full-stack solutions.
                        </p>
                        <p>
                            As a dedicated front-end developer, I thrive on crafting clean, intuitive, and efficient
                            interfaces with HTML5, CSS3, JavaScript, Sass, and tools like Webpack. My love for
                            programming extends beyond my professional work; I actively explore IoT projects that merge
                            my skills in microcontrollers and web technologies, reflecting my lifelong curiosity and
                            commitment to innovation.
                        </p>
                    </article>
                    <hr/>
                    <h3 id="experience">Experience</h3>
                    <article className="mt-5">
                        <div>
                            <h4 className={styles.articleTitles}>Yelo</h4>
                            <h5>Software Developer</h5>
                            <h5 className="text-secondary">
                                April 2025 - Present
                            </h5>
                        </div>
                        <p>
                            Built a RAG-powered chat application using Dockerized microservices (Ollama, ChromaDB, Express.js).
                            Implemented document embedding (TensorFlow USE), semantic search, and context retrieval to augment LLM responses.
                            Developed a ChatGPT-like frontend (Next.js + Tailwind) with real-time interaction.
                        </p>
                        <div className={styles.paragraph}>
                            <h4>Project: RAG-powered Chat Application with Ollama, ChromaDB, and Express.js</h4>
                                <ul>
                                    <li>
                                        <span className="text-success">Architected and deployed</span> a multi-container environment using Docker Compose,
                                        with separate services for Ollama (LLM inference), ChromaDB (vector database), and an Express.js REST API layer.
                                    </li>
                                    <li>
                                        <span className="text-success">Implemented RAG (Retrieval Augmented Generation)</span> pipeline:
                                            <ul>
                                                <li>Preprocessed and chunked Markdown documents.</li>
                                                <li>Generated embeddings using TensorFlow Universal Sentence Encoder (USE).</li>
                                                <li>Stored vectors, metadata, and documents in ChromaDB for semantic search.</li>
                                                <li>Retrieved context at query time and augmented prompts dynamically.</li>
                                            </ul>
                                    </li>
                                    <li>
                                        <span className="text-success">Built a REST API in Express.js</span> to manage chat sessions, handle embeddings, and forward requests to Ollama’s
                                        REST API for both generate and chat endpoints.
                                    </li>
                                    <li>
                                        <span className="text-success">Developed a ChatGPT-like frontend (Next.js + Tailwind)</span> that allows interactive Q&A, retrieves context from Chroma, and streams answers from Ollama in real time.
                                    </li>
                                    <li>
                                        <span className="text-success">Optimized data ingestion pipeline</span> with concurrent workers to embed and store thousands of Markdown files efficiently.
                                    </li>
                                    <li>
                                        Designed system with <span className="text-success">modularity and scalability</span> in mind, enabling easy replacement of embedding models, storage backends, or UI layer.
                                    </li>
                                </ul>
                        </div>

                    </article>
                    <article className="mt-5">
                        <div>
                            <h4 className={styles.articleTitles}>Software Development Academy</h4>
                            <h5>Javascript and React Trainner</h5>
                            <h5 className="text-secondary">
                                June 2021 - Present
                            </h5>
                        </div>
                        <p>Delivered comprehensive training programs on <span
                            className={styles.highlights}>JavaScript</span> and <span
                            className={styles.highlights}>React.js</span>, tailored to students at varying skill levels,
                            fostering a strong understanding of modern web development practices.</p>
                        <p>Conducted interactive live coding workshops to demonstrate real-world problem-solving
                            techniques and best practices, promoting hands-on learning and active student
                            participation.</p>
                        <p>Designed and implemented engaging course materials, including tutorials, coding exercises,
                            and project assignments, to enhance learning outcomes.</p>
                        <p>Provided personalized mentorship and feedback, helping students build practical skills and
                            successfully complete portfolio projects.</p>
                        <p>Kept curriculum up-to-date with the latest industry trends and technologies, ensuring
                            students were prepared for real-world development challenges.</p>
                    </article>
                    <article className="mt-5">
                        <div>
                            <h4 className={styles.articleTitles}>Vatis Tech</h4>
                            <h5>Javascript and React JS developer</h5>
                            <h5 className="text-secondary">
                                June 2022 - June 2024
                            </h5>
                        </div>
                        <p>Developed and implemented a robust text editor using <span
                            className={styles.highlights}>Next.js</span>, featuring real-time synchronization of video
                            and audio with editable text, enabling seamless subtitle creation and editing.</p>
                        <p>Leveraged the <span className={styles.highlights}>content-editable</span> attribute to
                            deliver a user-friendly and interactive editing experience, ensuring high performance and
                            accuracy in multimedia synchronization.</p>
                        <p>Collaborated closely with cross-functional teams to ensure project alignment with client
                            requirements and deadlines, maintaining code quality and scalability.</p>
                        <p>Enhanced the user interface for intuitive navigation and accessibility, contributing to
                            improved user satisfaction and engagement metrics.</p>
                    </article>
                    <article className="mt-5">
                        <div>
                            <h4 className={styles.articleTitles}>Ness Digital Engineering</h4>
                            <h5>NodeJS, ReactJS developer</h5>
                            <h5 className="text-secondary">July 2021 - June 2022</h5>
                        </div>
                        <p>Develop a dynamic form application capable of generating forms in real-time based on data
                            received from the backend.</p>
                        <p>Implemented responsive and modular components, ensuring seamless integration with backend
                            APIs and a smooth user experience across devices.</p>
                        <p>Optimized application performance by adhering to best practices in modern frontend
                            development, including efficient state management and component-based architecture.</p>
                        <p>Participated in code reviews and agile development practices, contributing to the delivery of
                            high-quality, maintainable code within tight deadlines.</p>
                        <p>Worked closely with backend developers and UX designers to align functionality and design,
                            ensuring the application met business and user requirements.</p>
                    </article>
                    <article className="mt-5">
                        <div>
                            <h4 className={styles.articleTitles}>Everseen</h4>
                            <h5>NodeJS, ReactJS developer</h5>
                            <h5 className="text-secondary">
                                April 2020 - June 2021
                            </h5>
                        </div>
                        <p>Contributed to the development of user interfaces designed to train AI engines, incorporating
                            advanced tools for annotating images and GIFs.</p>
                        <p>Engineered interactive drawing functionalities to enable precise area selection and
                            annotation, providing pixel-perfect measurements critical for AI training datasets.</p>
                        <p>Collaborated with data scientists and backend teams to ensure seamless data flow and
                            integration with AI training pipelines.</p>
                        <p>Focused on creating intuitive and responsive interfaces, enhancing usability for end-users
                            while maintaining high performance and reliability.</p>
                    </article>
                    <article className="mt-5">
                        <div>
                            <h4 className={styles.articleTitles}>Cognizant Softvision</h4>
                            <h5>NodeJS, ReactJS developer</h5>
                            <h5 className="text-secondary">
                                October 2018 - April 2020
                            </h5>
                        </div>
                        <p>Collaborated with back-end developers and web designers to enhance usability, ensuring
                            seamless integration of front-end and back-end systems.</p>
                        <p>Authored functional requirement documents and guides, and created quality mockups and
                            prototypes to facilitate the development process.</p>
                        <p>Supported back-end developers with coding, troubleshooting, and API definitions, fostering
                            efficient cross-functional collaboration.</p>
                        <p>Ensured high-quality graphic standards and brand consistency across all user interfaces,
                            contributing to a polished and cohesive user experience.</p>
                        <p>Supervised and mentored less experienced team members, fostering knowledge sharing and skill
                            development within the team.</p>
                        <p>Partnered with the software engineering team, Product Management, and Technical Operations to
                            align technical implementation with business objectives.</p>
                        <p>Engaged with senior management and business users as needed to gather requirements, provide
                            updates, and ensure project success.</p>
                    </article>
                    <article className="mt-5">
                        <div>
                            <h4 className={styles.articleTitles}>3Pillar Global Romania</h4>
                            <h5>NodeJS, ReactJS developer</h5>
                            <h5 className="text-secondary">
                                June 2017 - October 2018
                            </h5>
                        </div>
                        <p>Developed responsive and dynamic front-end applications using React.js and Redux for
                            efficient state management, ensuring high performance and scalability.</p>
                        <p>Collaborated closely with the design team to translate UI/UX designs into functional and
                            visually appealing web interfaces.</p>
                        <p>Participated in the entire application lifecycle, with a strong focus on coding, debugging,
                            and continuous improvement.</p>
                        <p>Wrote clean, modular, and maintainable code to deliver functional and high-quality web
                            applications.</p>
                        <p>Troubleshot and debugged applications, resolving issues promptly to minimize downtime and
                            improve user experience.</p>
                        <p>Modernized legacy applications by integrating cutting-edge technologies, enhancing
                            performance, and extending functionality.</p>
                        <p>Built reusable code and component libraries, streamlining development processes and promoting
                            scalability for future projects.</p>
                    </article>
                    <article className="mt-5">
                        <div>
                            <h4 className={styles.articleTitles}>Meta Engineering Solutions</h4>
                            <h5>Embedded Engineer</h5>
                            <h5 className="text-secondary">
                                December 2016 - June 2017
                            </h5>
                        </div>
                        <p>HE-Solution was renamed to META Engineering Solutions.</p>
                    </article>
                    <article className="mt-5">
                        <div>
                            <h4 className={styles.articleTitles}>HE SOLUTIONS SRL</h4>
                            <h5>Embedded Engineer</h5>
                            <h5 className="text-secondary">
                                June 2014 - November 2016
                            </h5>
                        </div>
                        <p>Led the development of full custom projects, from hardware design to programming, with a
                            focus on <span
                                className={styles.highlights}>ATmega microcontrollers (ATMEL)</span> using <span
                                className={styles.highlights}>ANSI C</span>.
                        </p>
                        <p>Designed and laid out <span className={styles.highlights}>PCBs</span>, and programmed
                            low-level firmware to interface with hardware components via communication protocols such
                            as <span className={styles.highlights}>I2C</span>, <span
                                className={styles.highlights}>SPI</span>, and <span
                                className={styles.highlights}>UART</span>.
                        </p>
                        <p>Gained in-depth experience in low-level programming, working directly with hardware timers,
                            interrupts, and memory management for optimized system performance.</p>
                        <p>Designed, modified, and interpreted schematics and PCBs, ensuring accurate understanding of
                            hardware requirements and seamless integration with software solutions.</p>
                        <p>Collaborated with cross-functional teams to define and implement solutions that aligned with
                            project specifications and business needs.</p>
                        <p>Developed <span className={styles.highlights}>Python-based UIs</span> and testing tools to
                            streamline the debugging and testing processes, improving workflow efficiency.</p>
                        <p>Focused on continuous learning and skill development, enhancing both hardware and software
                            expertise in embedded systems.</p>
                    </article>
                    <hr/>
                    <h3 id="education">Education</h3>
                    <article className="mt-5">
                        <div>
                            <h4>Universitatea din Oradea</h4>
                            <h5>{`Engineer's degree, IT software`}</h5>
                            <a href="https://ieti.uoradea.ro/ro/" target="_blank" rel="noreferrer"
                               className="text-secondary">
                                https://ieti.uoradea.ro/ro/
                            </a>
                        </div>
                    </article>
                </section>
            </div>
        )
}

export default About;

