/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Contact.module.css";

function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! I will get back to you soon.");
    e.target.reset();
  };

  return (
    <section
      id='contact'
      className={styles.contact}
      ref={ref}>
      <div className='container'>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <h2 className='section-title'>Get in Touch</h2>
          <p>Let's create something amazing together</p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <div className={styles.infoCard}>
              <h3>Let's Work Together</h3>
              <p>Open to new projects, creative ideas, and collaborations.</p>
              <div className={styles.contactBtns}>
                <a
                  href='https://wa.me/+201154925965'
                  className={styles.whatsappBtn}
                  target='_blank'>
                  <i className='fab fa-whatsapp' /> Chat on WhatsApp
                </a>
                <a
                  href='mailto:abdullahwahid987@gmail.com'
                  className={styles.emailBtn}>
                  <i className='fas fa-envelope' /> Send Email
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h3>Follow Me</h3>
              <a
                href='https://www.facebook.com/share/192tUe6aun/'
                className={styles.socialItem}
                target='_blank'>
                <i
                  className='fab fa-facebook'
                  style={{ color: "#1877f2" }}
                />{" "}
                Facebook
              </a>
              <a
                href='https://www.behance.net/abdullahwahid5'
                className={styles.socialItem}
                target='_blank'>
                <i
                  className='fab fa-behance'
                  style={{ color: "#0057ff" }}
                />{" "}
                Behance
              </a>
              <a
                href='https://www.linkedin.com/in/abdullah-wahid-558238361'
                className={styles.socialItem}
                target='_blank'>
                <i
                  className='fab fa-linkedin'
                  style={{ color: "#0077b5" }}
                />{" "}
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input
                  type='text'
                  placeholder='Your Name'
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label>Email</label>
                <input
                  type='email'
                  placeholder='Your Email'
                />
              </div>
              <div className={styles.formGroup}>
                <label>Phone</label>
                <input
                  type='tel'
                  placeholder='Your Phone Number'
                />
              </div>
              <div className={styles.formGroup}>
                <label>Message</label>
                <textarea
                  placeholder='Your Message'
                  required
                />
              </div>
              <button
                type='submit'
                className={styles.submitBtn}>
                <i className='fas fa-paper-plane' /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
