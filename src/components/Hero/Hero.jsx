/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const roles = ["Graphic Designer", "Print Specialist", "Brand Identity Expert", "Visual Storyteller"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" },
});

// ── Particles ──
function useParticles(canvasRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const POINTS = 55;
    const pts = Array.from({ length: POINTS }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      });

      for (let i = 0; i < POINTS; i++) {
        for (let j = i + 1; j < POINTS; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(229,57,53,${(1 - dist / 130) * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
        ctx.beginPath();
        ctx.arc(pts[i].x, pts[i].y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(229,57,53,0.5)";
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [canvasRef]);
}

function Hero() {
  const canvasRef = useRef(null);
  useParticles(canvasRef);

  const [displayed, setDisplayed] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) setTimeout(() => setIsDeleting(true), 1500);
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length === 0) {
          setIsDeleting(false);
          setRoleIndex((p) => (p + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id='home'
      className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgImage}>
        <img
          src='/images/hero_cover.jpg'
          alt=''
        />
      </div>
      <div className={styles.bgGradient} />
      <div className={styles.bgGrid} />
      <canvas ref={canvasRef} />

      {/* Main content */}
      <div className={styles.content}>
        <motion.div
          className={styles.badge}
          {...fadeUp(0.1)}>
          <span className={styles.badgeDot} />
          Available for work
        </motion.div>

        <motion.h1
          className={styles.name}
          {...fadeUp(0.2)}>
          Abdallah <span>Whaid</span>
        </motion.h1>

        <motion.div
          className={styles.typingRow}
          {...fadeUp(0.3)}>
          {displayed}
          <span className={styles.cursor} />
        </motion.div>

        <motion.p
          className={styles.tagline}
          {...fadeUp(0.4)}>
          Transforming ideas into impactful visual designs that leave a lasting impression on every audience.
        </motion.p>

        <motion.div
          className={styles.buttons}
          {...fadeUp(0.5)}>
          <a
            href='#contact'
            className={styles.primaryBtn}>
            <span>
              <i className='fas fa-paper-plane' /> Get in Touch
            </span>
          </a>
          <a
            href='/Resume.pdf'
            className={styles.secondaryBtn}
            target='_blank'>
            <i className='fas fa-file-alt' /> View Resume
          </a>
        </motion.div>

        <motion.div
          className={styles.stats}
          {...fadeUp(0.6)}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>2+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Projects Done</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>98%</span>
            <span className={styles.statLabel}>Client Satisfaction</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>Happy Clients</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <i className='fas fa-chevron-down' />
      </div>
    </section>
  );
}

export default Hero;
