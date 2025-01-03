import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import styles from "../../../../mywebsite/styles/contact.module.css";
import {BsGithub, BsLinkedin} from "react-icons/bs";

const Contact = () => {
    return(
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <ul className={`list-group gap-3 ${styles.list}`}>
                <li className="hero p-3 mx-2"><a className="d-flex align-items-center" href="tel:+40 722.205.498"><FaPhoneAlt size="1.2rem"/><span className="ms-3">+40 722.205.498</span></a></li>
                <li className="hero p-3 mx-2"><a className="d-flex align-items-center" href="email:cristiscarlat1978@gmail.com"><MdOutlineEmail size="1.2rem"/><span className="ms-3">cristiscarlat1978@gmail.com</span></a></li>
                <li className="hero p-3 mx-2"><a
                    className="d-flex align-items-center"
                    href="https://github.com/CristiScarlat"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub
                        size="1.5rem"
                    />
                    <span className="ms-3">https://github.com/CristiScarlat</span>
                </a></li>
                <li className="hero p-3 mx-2"><a
                    className="d-flex align-items-center"
                    href="https://www.linkedin.com/in/cristian-scarlat-6839a942"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin size="1.5rem"/>
                    <span className="ms-3">https://www.linkedin.com/in/cristian-scarlat-6839a942</span>
                </a></li>
            </ul>
        </div>
    )
}

export default Contact;