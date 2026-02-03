import React from 'react'
import experiencesData from '../data/experiences.json'
import { MdWork, MdSchool, MdLocationOn, MdDateRange } from 'react-icons/md'

const Experiences: React.FC = () => {
  const { workExperience, education } = experiencesData

  return (
    <section className="section">
      <h1>Experience</h1>
      <p>My professional journey and educational background</p>

      <div className="experience-container">
        <div className="experience-section">
          <h2><MdWork className="section-icon" /> Work Experiences</h2>
          <div className="experience-list">
            {workExperience.map((exp, index) => (
              <div key={index} className="card experience-card">
                <div className="card-header">
                  <h3>{exp.position}</h3>
                  <h4 className="company-name">{exp.company}</h4>
                </div>
                <div className="experience-meta">
                  <span className="meta-item"><MdLocationOn /> {exp.location}</span>
                  <span className="meta-item"><MdDateRange /> {exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="experience-description">{exp.description}</p>
                <div className="tech-stack">
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="experience-section">
          <h2><MdSchool className="section-icon" /> Education</h2>
          <div className="experience-list">
            {education.map((edu, index) => (
              <div key={index} className="card experience-card">
                <div className="card-header">
                  <h3>{edu.degree}</h3>
                  <h4 className="company-name">{edu.institution}</h4>
                </div>
                <div className="experience-meta">
                  <span className="meta-item"><MdLocationOn /> {edu.location}</span>
                  <span className="meta-item"><MdDateRange /> {edu.startDate} - {edu.endDate}</span>
                </div>
                <p className="experience-description">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
