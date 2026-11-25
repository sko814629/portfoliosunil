import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { PROJECTS_CONTENT } from '../../data/portfolioData';
import './Projects.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_CONTENT.items
      : PROJECTS_CONTENT.items.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section__header section__header--split"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="section__eyebrow">{PROJECTS_CONTENT.eyebrow}</span>
            <h2 className="section__title">
              {PROJECTS_CONTENT.headingLead}{' '}
              <span className="section__title-serif">{PROJECTS_CONTENT.headingSerif}</span>{' '}
              {PROJECTS_CONTENT.headingTail}
            </h2>
          </div>

          <div className="projects__filters" role="tablist" aria-label="Filter projects by category">
            {PROJECTS_CONTENT.categories.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={`projects__filter-btn ${
                  activeCategory === category ? 'projects__filter-btn--active' : ''
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: 0.05 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="project-card__preview">
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.role} showcase`}
                  className="project-card__image"
                  loading="lazy"
                />
                <div className="project-card__preview-overlay">
                  <span className="project-card__code">{project.code}</span>
                  <span className="project-card__year">{project.year}</span>
                </div>
              </div>

              <div className="project-card__content">
                <div className="project-card__meta">
                  <span className="project-card__category">{project.category}</span>
                  <span className="project-card__role">{project.role}</span>
                </div>

                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__summary">{project.summary}</p>

                <div className="project-card__footer">
                  <ul className="project-card__stack">
                    {project.stack.slice(0, 3).map((tech) => (
                      <li key={tech} className="project-card__tag">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className="project-card__btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>Case Study</span>
                    <ArrowUpRight size={15} strokeWidth={2.2} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal__backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="project-modal__header">
                <div>
                  <span className="project-modal__eyebrow">
                    {selectedProject.code} • {selectedProject.year}
                  </span>
                  <h3 id="project-modal-title" className="project-modal__title">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  className="project-modal__close"
                  aria-label="Close project details"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={18} strokeWidth={2} />
                </button>
              </div>

              <div className="project-modal__image-wrap">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  className="project-modal__image"
                />
              </div>

              <p className="project-modal__role">{selectedProject.role}</p>
              <p className="project-modal__summary">{selectedProject.summary}</p>

              <div className="project-modal__section">
                <h4 className="project-modal__label">Key Highlights</h4>
                <ul className="project-modal__highlights">
                  {selectedProject.highlights.map((point) => (
                    <li key={point} className="project-modal__highlight">
                      <CheckCircle2 size={16} strokeWidth={2.1} aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-modal__section">
                <h4 className="project-modal__label">Tools &amp; Technologies</h4>
                <ul className="project-modal__stack">
                  {selectedProject.stack.map((tech) => (
                    <li key={tech} className="project-card__tag">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-modal__actions">
                <a
                  href="#contact"
                  className="btn btn--primary"
                  onClick={() => setSelectedProject(null)}
                >
                  <span>Discuss a Similar Project</span>
                  <ArrowUpRight size={16} strokeWidth={2.2} />
                </a>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
