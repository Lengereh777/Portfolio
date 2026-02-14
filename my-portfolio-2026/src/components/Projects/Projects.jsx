import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-commerce Dashboard',
            description: 'A comprehensive dashboard for managing online store operations, featuring real-time analytics, inventory management, and order tracking.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
            image: 'https://picsum.photos/seed/project1/800/600.jpg'
        },
        {
            id: 2,
            title: 'Social Media App',
            description: 'A modern social networking platform with real-time messaging, post sharing, and community features.',
            technologies: ['React', 'Socket.io', 'Firebase', 'Tailwind CSS'],
            image: 'https://picsum.photos/seed/project2/800/600.jpg'
        },
        {
            id: 3,
            title: 'Weather Forecast App',
            description: 'A beautiful weather application that provides accurate forecasts, interactive maps, and weather alerts.',
            technologies: ['React', 'OpenWeatherMap API', 'Leaflet', 'Chart.js'],
            image: 'https://picsum.photos/seed/project3/800/600.jpg'
        },
        {
            id: 4,
            title: 'Task Management System',
            description: 'A collaborative task management tool with drag-and-drop functionality, team workspaces, and deadline tracking.',
            technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
            image: 'https://picsum.photos/seed/project4/800/600.jpg'
        }
    ];

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Projects</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.projectTechnologies}>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className={styles.techTag}>
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.projectLinks}>
                                    <a href="#" className={styles.projectLink}>
                                        <span className={styles.linkText}>View Project</span>
                                    </a>
                                    <a href="#" className={styles.projectLink}>
                                        <span className={styles.linkText}>GitHub</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
