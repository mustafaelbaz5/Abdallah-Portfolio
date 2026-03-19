import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.footerContent}>
          <div className={styles.section}>
            <h3>Contact Details</h3>
            <div className={styles.contactItem}>
              <i className='fas fa-envelope' />
              <span>abdullahwahid987@gmail.com</span>
            </div>
            <div className={styles.contactItem}>
              <i className='fas fa-phone' />
              <span>+20 115 492 5965</span>
            </div>
            <div className={styles.contactItem}>
              <i className='fas fa-map-marker-alt' />
              <span>Mansoura, Dakahlia, Egypt</span>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Social Media</h3>
            <a
              href='https://www.facebook.com/share/192tUe6aun/'
              className={styles.socialItem}
              target='_blank'>
              <i className='fab fa-facebook' /> Facebook
            </a>
            <a
              href='https://www.behance.net/abdullahwahid5'
              className={styles.socialItem}
              target='_blank'>
              <i className='fab fa-behance' /> Behance
            </a>
            <a
              href='https://www.linkedin.com/in/abdullah-wahid-558238361'
              className={styles.socialItem}
              target='_blank'>
              <i className='fab fa-linkedin' /> LinkedIn
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Abdallah Whaid. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href='http://www.linkedin.com/in/mustafa-elbaz-725a6631a'
              target='_blank'>
              Mustafa Elbaz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
