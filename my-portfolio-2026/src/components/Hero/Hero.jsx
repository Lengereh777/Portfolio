import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>
                    Hi, I'm <span className={styles.highlight}>Your Name</span>
                </h1>
                <p className={styles.heroSubtitle}>
                    Frontend Developer & Creative Designer
                </p>
                <p className={styles.heroDescription}>
                    I build beautiful, responsive, and user-friendly web experiences
                    using modern web technologies.
                </p>
                <div className={styles.heroButtons}>
                    <button
                        onClick={() => handleScroll('projects')}
                        className={styles.primaryButton}
                    >
                        View Projects
                    </button>
                    <button
                        onClick={() => handleScroll('contact')}
                        className={styles.secondaryButton}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
