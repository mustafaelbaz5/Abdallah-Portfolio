/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setIsOpen(false);

  const links = [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.navInner}>
          <Link
            to='/'
            className={styles.logo}>
            <img
              src='src\assets\images\logo.png'
              alt='Logo'
            />
          </Link>

          <ul className={styles.navLinks}>
            {links.map((link) => (
              <li key={link.label}>
                {link.href.startsWith("/") && !link.href.includes("#") ?
                  <Link to={link.href}>{link.label}</Link>
                : <a href={link.href}>{link.label}</a>}
              </li>
            ))}
            <li>
              <a
                href='/#contact'
                className={styles.contactBtn}>
                Contact
              </a>
            </li>
          </ul>

          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen(true)}>
            <i className='fas fa-bars' />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className={styles.overlay}
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}>
              <button
                className={styles.closeBtn}
                onClick={close}>
                <i className='fas fa-times' />
              </button>
              {links.map((link) =>
                link.href.startsWith("/") && !link.href.includes("#") ?
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={close}>
                    {link.label}
                  </Link>
                : <a
                    key={link.label}
                    href={link.href}
                    onClick={close}>
                    {link.label}
                  </a>,
              )}
              <a
                href='/#contact'
                onClick={close}
                style={{ color: "var(--accent)", fontWeight: 600 }}>
                Contact
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
