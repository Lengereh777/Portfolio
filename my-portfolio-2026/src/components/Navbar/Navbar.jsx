import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo} onClick={() => handleScroll('hero')}>
                Portfolio
            </div>
            <div className={styles.navLinks}>
                <button onClick={() => handleScroll('hero')} className={styles.navLink}>
                    Home
                </button>
                <button onClick={() => handleScroll('about')} className={styles.navLink}>
                    About
                </button>
                <button onClick={() => handleScroll('projects')} className={styles.navLink}>
                    Projects
                </button>
                <button onClick={() => handleScroll('contact')} className={styles.navLink}>
                    Contact
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
