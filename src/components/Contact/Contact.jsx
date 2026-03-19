/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./Contact.module.css";

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
      <div className={styles.bgGrid} />

      <div className='container'>
        {/* Header */}
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}>
          <div className={styles.headerBadge}>
            <i className='fas fa-paper-plane' />
            Contact
          </div>
          <h2>
            Let's Work <span>Together</span>
          </h2>
          <p>Have a project in mind? Let's create something amazing together.</p>
        </motion.div>

        <div className={styles.layout}>
          {/* Left */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}>
            {/* Reach out card */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <div className={styles.infoCardIcon}>
                  <i className='fas fa-handshake' />
                </div>
                <h3>Let's Work Together</h3>
              </div>
              <p>Open to new projects, creative ideas, and exciting collaborations. Let's bring your vision to life.</p>
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

            {/* Social card */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <div className={styles.infoCardIcon}>
                  <i className='fas fa-share-nodes' />
                </div>
                <h3>Follow My Work</h3>
              </div>
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
                  <i className={`fas fa-arrow-right ${styles.socialArrow}`} />
                </a>
              ))}
            </div>

            {/* Availability */}
            <div className={styles.availability}>
              <span className={styles.availDot} />
              Available for freelance work — Sun to Thu
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className={styles.formCard}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}>
            <p className={styles.formTitle}>Send a Message</p>
            <p className={styles.formSubtitle}>Fill out the form and I'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
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
                  placeholder='Tell me about your project...'
                  required
                />
              </div>

              <button
                type='submit'
                className={styles.submitBtn}>
                <i className='fas fa-paper-plane' />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
