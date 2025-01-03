'use client'
import Link from "next/link";
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen, FaBlog } from "react-icons/fa";
import { usePathname } from "next/navigation";

const MobileFooter = () => {
    const pathname = usePathname();

  return (
    <div className="home-nav-link-mobile d-lg-none">
      <Link href="/" className={pathname === "/" ? "text-white" : ""}>
        <FaHome size="1.5rem" />
      </Link>
      <Link href="/about" className={pathname === "/about" ? "text-white" : ""}>
        <FaUser size="1.5rem" />
      </Link>
      <Link href="/portfolio" className={pathname === "/portfolio" ? "text-white" : ""}>
        <FaBriefcase size="1.5rem" />
      </Link>
      <Link href="/contact" className={pathname === "/contact" ? "text-white" : ""}>
        <FaEnvelopeOpen size="1.5rem" />
      </Link>
      <Link href="/blog" className={pathname === "/blog" ? "text-white" : ""}>
        <FaBlog size="1.5rem" />
      </Link>
    </div>
  );
};

export default MobileFooter;
