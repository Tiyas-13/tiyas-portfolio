// src/components/AnimatedSection.js
import React, {useState, useEffect} from 'react';
import './index.css';

const AnimatedSection = ({ id, children, thr }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target.id === id) {
                        if (entry.isIntersecting) {
                            setIsVisible(true);
                        } else {
                            setIsVisible(false);
                        }
                    }
                });
            },
            { threshold: thr } // Adjust the threshold as needed
        );

        const targetElement = document.getElementById(id);
        if (targetElement) {
            observer.observe(targetElement);
        }

        return () => {
            if (targetElement) {
                observer.unobserve(targetElement);
            }
        };
    }, [id]);

    return <div id={id} className={`animated-section ${isVisible ? 'animate' : ''}`}>{children}</div>;
};

export default AnimatedSection;
