import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import '../styles/Blog.css';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    image: string;
    slug: string;
}

const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: 'Building Modern Web Applications with React 19',
        excerpt: 'Explore the latest features in React 19 and how they can improve your development workflow. From server components to improved hydration.',
        date: '2026-02-15',
        readTime: '8 min read',
        tags: ['React', 'JavaScript', 'Web Development'],
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
        slug: 'building-modern-web-applications-react-19'
    },
    {
        id: 2,
        title: 'TypeScript Best Practices for 2026',
        excerpt: 'Learn the essential TypeScript patterns and practices that will help you write cleaner, more maintainable code in your projects.',
        date: '2026-02-10',
        readTime: '6 min read',
        tags: ['TypeScript', 'Best Practices'],
        image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop',
        slug: 'typescript-best-practices-2026'
    },
    {
        id: 3,
        title: 'The Future of CSS: New Features You Should Know',
        excerpt: 'Discover the latest CSS features including container queries, cascade layers, and the new color functions that are changing web design.',
        date: '2026-02-05',
        readTime: '5 min read',
        tags: ['CSS', 'Web Design'],
        image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=250&fit=crop',
        slug: 'future-of-css-new-features'
    }
];

const Blog: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const blogRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const blogElement = blogRef.current;
        if (blogElement) {
            observer.observe(blogElement);
        }

        return () => {
            if (blogElement) {
                observer.unobserve(blogElement);
            }
        };
    }, []);

    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <section id="blog" className="blog" ref={blogRef}>
            <div className="blog-content">
                {/* Section Header */}
                <div className={`section-header fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0s' }}>
                    <span className="section-tag">Blog</span>
                    <h2 className="section-title">Latest Articles</h2>
                    <p className="section-subtitle">
                        Thoughts, tutorials, and insights on web development
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="blog-grid">
                    {BLOG_POSTS.map((post, index) => (
                        <article
                            key={post.id}
                            className={`blog-card fade-in-up ${isVisible ? 'visible' : ''}`}
                            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                        >
                            <div className="blog-card-image">
                                <img src={post.image} alt={post.title} loading="lazy" />
                                <div className="blog-card-overlay"></div>
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-card-meta">
                                    <span className="blog-card-date">
                                        <Calendar size={14} />
                                        {formatDate(post.date)}
                                    </span>
                                    <span className="blog-card-read-time">
                                        <Clock size={14} />
                                        {post.readTime}
                                    </span>
                                </div>
                                <h3 className="blog-card-title">{post.title}</h3>
                                <p className="blog-card-excerpt">{post.excerpt}</p>
                                <div className="blog-card-tags">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="blog-tag">
                                            <Tag size={12} />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href={`/blog/${post.slug}`} className="blog-card-link">
                                    Read More
                                    <ArrowRight size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className={`blog-cta fade-in-up ${isVisible ? 'visible' : ''}`} style={{ animationDelay: '0.6s' }}>
                    <a href="/blog" className="blog-view-all-btn">
                        View All Articles
                        <ArrowRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export { Blog };
