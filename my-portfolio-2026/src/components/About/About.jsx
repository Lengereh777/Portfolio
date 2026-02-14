import React from 'react';
import styles from './About.module.css';

const About = () => {
    const skills = [
        { name: 'HTML5', level: 'Expert' },
        { name: 'CSS3', level: 'Expert' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React', level: 'Advanced' },
        { name: 'TypeScript', level: 'Intermediate' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Git', level: 'Advanced' },
        { name: 'Responsive Design', level: 'Expert' },
    ];

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>About Me</h2>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <p className={styles.bio}>
                            I'm a passionate frontend developer with a keen eye for design and
                            a love for creating intuitive, user-friendly web experiences. With
                            several years of experience in building modern web applications, I
                            specialize in React and JavaScript ecosystems.
                        </p>
                        <p className={styles.bio}>
                            My journey in web development started with a fascination for how
                            code can transform ideas into reality. I constantly strive to stay
                            updated with the latest technologies and best practices to deliver
                            high-quality solutions that meet both user needs and business
                            objectives.
                        </p>
                        <p className={styles.bio}>
                            When I'm not coding, you can find me exploring new design trends,
                            contributing to open-source projects, or sharing knowledge with
                            the developer community.
                        </p>
                    </div>
                    <div className={styles.skills}>
                        <h3 className={styles.skillsTitle}>Skills</h3>
                        <div className={styles.skillsGrid}>
                            {skills.map((skill, index) => (
                                <div key={index} className={styles.skillCard}>
                                    <div className={styles.skillInfo}>
                                        <span className={styles.skillName}>{skill.name}</span>
                                        <span className={styles.skillLevel}>{skill.level}</span>
                                    </div>
                                    <div className={styles.skillBar}>
                                        <div
                                            className={styles.skillProgress}
                                            style={{
                                                width: skill.level === 'Expert' ? '95%' :
                                                    skill.level === 'Advanced' ? '85%' : '70%'
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
