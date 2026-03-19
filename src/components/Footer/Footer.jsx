import styles from "./Footer.module.css";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/192tUe6aun/",
    icon: "fab fa-facebook",
    color: "#1877f2",
    bg: "rgba(24,119,242,0.1)",
  },
  {
    label: "Behance",
    href: "https://www.behance.net/abdullahwahid5",
    icon: "fab fa-behance",
    color: "#0057ff",
    bg: "rgba(0,87,255,0.1)",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdullah-wahid-558238361",
    icon: "fab fa-linkedin",
    color: "#0077b5",
    bg: "rgba(0,119,181,0.1)",
  },
];

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.bgGrid} />
        <div className='container'>
          <div className={styles.footerGrid}>
            {/* Brand */}
            <div className={styles.brand}>
              <img
                src='src/assets/images/logo.png'
                alt='Logo'
                className={styles.brandLogo}
              />
              <p className={styles.brandText}>
                Graphic designer and print specialist based in Mansoura, Egypt. Transforming ideas into impactful visual
                designs.
              </p>
            </div>

            {/* Contact */}
            <div>
              <p className={styles.colTitle}>Contact</p>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className='fas fa-envelope' />
                </div>
                <span>abdullahwahid987@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className='fas fa-phone' />
                </div>
                <span>+20 115 492 5965</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <i className='fas fa-location-dot' />
                </div>
                <span>Mansoura, Dakahlia, Egypt</span>
              </div>
            </div>

            {/* Social */}
            <div>
              <p className={styles.colTitle}>Follow Me</p>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialItem}
                  target='_blank'>
                  <div
                    className={styles.socialIcon}
                    style={{ background: s.bg }}>
                    <i
                      className={s.icon}
                      style={{ color: s.color }}
                    />
                  </div>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.footerBottom}>
        <div className='container'>
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © 2025 <span>Abdallah Whaid</span>. All rights reserved.
            </p>
            <button
              className={styles.scrollTop}
              onClick={scrollToTop}>
              Back to top
              <div className={styles.scrollTopIcon}>
                <i className='fas fa-arrow-up' />
              </div>
            </button>
            <p className={styles.devCredit}>
              Developed by{" "}
              <a
                href='http://www.linkedin.com/in/mustafa-elbaz-725a6631a'
                target='_blank'>
                Mustafa Elbaz
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
