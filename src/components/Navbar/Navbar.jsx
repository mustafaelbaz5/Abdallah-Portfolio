/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "#projects" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  const renderLink = (link, extraClass = "") => {
    const el =
      link.href.startsWith("/") && !link.href.includes("#") ?
        <Link
          to={link.href}
          className={extraClass}
          onClick={close}>
          {link.label}
        </Link>
      : <a
          href={link.href}
          className={extraClass}
          onClick={close}>
          {link.label}
        </a>;
    return el;
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link
            to='/'
            className={styles.logo}>
            <img
              src='src/assets/images/logo.png'
              alt='Logo'
            />
          </Link>

          <ul className={styles.navLinks}>
            {links.map((link) => (
              <li key={link.label}>{renderLink(link)}</li>
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
              {links.map((link) => renderLink(link))}
              <div className={styles.mobileDivider} />
              <a
                href='/#contact'
                className={styles.mobileContactBtn}
                onClick={close}>
                <i className='fas fa-paper-plane' /> Get in Touch
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
