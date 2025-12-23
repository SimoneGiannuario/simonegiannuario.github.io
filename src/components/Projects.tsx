import React, { useState } from 'react'
import projectsData from '../data/projects.json'

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [activeProjectIframeLink, setActiveProjectIframeLink] = useState<string | null>(null)
  const { projects } = projectsData

  const toggleProject = (projectTitle: string, link: string) => {
    setActiveProject(activeProject === projectTitle ? null : projectTitle)
    setActiveProjectIframeLink(activeProjectIframeLink === link ? null : link)
  }

  const closePreview = () => {
    setActiveProject(null)
    setActiveProjectIframeLink(null)
  }

  return (
    <section className="section">
      <h1>Personal Projects</h1>
      <div className="grid">
        {projects.personalProjects.map((project) => (
          <article key={project.title} className="card project-card">
            <div className="project-header">
              {project.deleted ? (<h3><del>{project.title}</del> (DELETED)</h3>)  : (<h3>{project.title}</h3>)}
                {(!project.deleted && project.iframeUrl) && 
              <div className="project-actions">
                <button 
                  className="btn btn-small"
                  onClick={() => toggleProject(project.title, project.iframeUrl)}
                  aria-label={`${activeProject === project.title ? 'Hide' : 'Show'} live preview of ${project.title}`}
                >
                  {activeProject === project.title ? 'Hide Preview' : 'Live Preview'}
                </button>
                <a href={project.link} className="btn btn-small btn-secondary" aria-label={`View ${project.title}`}>
                  View Project
                </a>
              </div>
                }
            </div>
            
            <p>{project.description}</p>
            
            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <h1>Professional Projects</h1>
      <div className="grid">
        {projects.professionalProjects.map((project) => (
          <article key={project.title} className="card project-card">
            <div className="project-header">
              {project.deleted ? (<h3><del>{project.title}</del> (DELETED)</h3>)  : (<h3>{project.title}</h3>)}
              {(!project.deleted && project.iframeUrl) &&
              <div className="project-actions">
                <button 
                  className="btn btn-small"
                  onClick={() => toggleProject(project.title, project.iframeUrl)}
                  aria-label={`${activeProject === project.title ? 'Hide' : 'Show'} live preview of ${project.title}`}
                >
                  {activeProject === project.title ? 'Hide Preview' : 'Live Preview'}
                </button>
                <a href={project.link} className="btn btn-small btn-secondary" aria-label={`View ${project.title}`}>
                  View Project
                </a>
              </div>
              }
            </div>
            
            {project.startingDate && <div className="dates">{`Starting Date: ${project.startingDate}`}</div>}
            {project.endingDate && <div className="dates">{`Ending Date: ${project.endingDate}`}</div>}

            <p>{project.description}</p>
            
            <div className="tech-stack">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Full Screen Iframe Preview */}
      {activeProject && (
        <div className="fullscreen-preview-overlay" onClick={closePreview}>
          <div className="fullscreen-preview-content" onClick={(e) => e.stopPropagation()}>
            <div className="preview-header">
              <h2>{activeProject}</h2>
              <button 
                className="close-preview-btn"
                onClick={closePreview}
                aria-label="Close preview"
              >
                ×
              </button>
            </div>
            <div className="fullscreen-iframe-container">
              <iframe
                src={activeProjectIframeLink || ''}
                title={`Live preview of ${activeProject}`}
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
