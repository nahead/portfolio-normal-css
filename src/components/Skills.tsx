import React from 'react'
import '../app/style/skills.css'

const Skills = () => {
    return (
        <div id='skills' className='skills-container'>
            <div className="skills-grid">
                <div data-aos="zoom-in-up">
                    <h2 className="skills-heading">Technologies I work with</h2>
                    <p className="skills-description">I have a solid foundation in web development, specializing in HTML, CSS, and JavaScript. My experience extends to using frameworks like React and NextJS to create dynamic and user-friendly applications.</p>
                </div>
                <div>
                    <div className="skills-list">
                        <div className="skills-item">
                            <h2 data-aos="zoom-in-up">TypeScript</h2>
                            <h2 data-aos="zoom-in-up">Node.js</h2>
                            <h2 data-aos="zoom-in-up">Next.js</h2>
                        </div>
                        <div className="skills-item">
                            <h2 data-aos="zoom-in-up">Tailwind</h2>
                            <h2 data-aos="zoom-in-up">CSS</h2>
                            <h2 data-aos="zoom-in-up">HTML</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills