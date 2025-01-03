'use client'
import Nav from "react-bootstrap/Nav";
import {FaBriefcase, FaBlog, FaEnvelopeOpen, FaHome, FaUser} from "react-icons/fa";
import { usePathname } from "next/navigation";
import Link from "next/link"

const SideHeader = () => {
  const pathname = usePathname();
  return(
    <Nav className="side-header-container d-lg-flex">
      <Link href="/" className={`${pathname === "/" ? "current" : ""} nav-link`}><FaHome size="1.5rem"/><span className="ms-3">Home</span></Link>
      <Link href="/about" className={`${pathname === "/about" ? "current" : ""} nav-link`}><FaUser size="1.5rem"/><span className="ms-3">About</span></Link>
      <Link href="/portfolio" className={`${pathname === "/portfolio" ? "current" : ""} nav-link`}><FaBriefcase size="1.5rem"/><span className="ms-3">Portfolio</span></Link>
      <Link href="/contact" className={`${pathname === "/contact" ? "current" : ""} nav-link`}><FaEnvelopeOpen size="1.5rem"/><span className="ms-3">Contact</span></Link>
      <Link href="/blog" className={`${pathname === "/blog" ? "current" : ""} nav-link`}><FaBlog size="1.5rem"/><span className="ms-3">Blog</span></Link>
    </Nav>
  )
}

export default SideHeader;