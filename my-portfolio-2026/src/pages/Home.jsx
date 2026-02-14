import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import styles from '../App.module.css';

const Home = () => {
    return (
        <div className={styles.app}>
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p className={styles.copyright}>
                        © 2026 Your Name. All rights reserved.
                    </p>
                    <div className={styles.socialLinks}>
                        <a href="https://github.com/yourusername" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com/yourusername" className={styles.socialLink} target="_blank" rel="noopener noreferrer">
                            Twitter
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
