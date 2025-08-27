'use client'
import {Button} from "react-bootstrap";
import styles from "../../app/about/page.module.css";
import {BsDownload} from "react-icons/bs";


const DownloadBtn = () => {
    const handleDownload = () => {
        const pdfUrl = "/download/Cristian_scarlat_CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Cristian_scarlat_CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return(
        <Button className={`${styles.iconBtn} d-print-none`} variant="success" onClick={handleDownload}>
            <BsDownload size="1.2rem"/>
            Curriculum Vitae
        </Button>
    )
}

export default DownloadBtn;