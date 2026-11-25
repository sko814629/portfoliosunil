import { motion } from 'framer-motion';
import { ArrowUpRight, GraduationCap, Sparkles } from 'lucide-react';
import { ABOUT_CONTENT } from '../../data/portfolioData';
import './About.css';

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          className="section__header"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          custom={0}
        >
          <span className="section__eyebrow">{ABOUT_CONTENT.eyebrow}</span>
          <h2 className="section__title">
            {ABOUT_CONTENT.headingLead}{' '}
            <span className="section__title-serif">{ABOUT_CONTENT.headingSerif}</span>{' '}
            {ABOUT_CONTENT.headingTail}
          </h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__story"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.08}
          >
            <div className="about__paragraphs">
              {ABOUT_CONTENT.paragraphs.map((text, index) => (
                <p key={index} className="about__text">
                  {text}
                </p>
              ))}
            </div>

            <div className="about__credentials">
              {ABOUT_CONTENT.credentials.map((item, idx) => (
                <div key={item.label} className="about__credential-card">
                  <div className="about__credential-icon" aria-hidden="true">
                    {idx === 0 ? <GraduationCap size={18} /> : <Sparkles size={18} />}
                  </div>
                  <div>
                    <span className="about__credential-label">{item.label}</span>
                    <p className="about__credential-title">{item.title}</p>
                    <p className="about__credential-meta">{item.meta}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="about__cta-row">
              <a href="#projects" className="btn btn--primary">
                <span>Explore Select Work</span>
                <ArrowUpRight size={17} strokeWidth={2.2} />
              </a>
              <a href="#contact" className="btn btn--secondary">
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="about__skills-panel"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0.16}
          >
            <div className="about__panel-header">
              <span className="about__panel-title">Capabilities &amp; Toolset</span>
              <span className="about__panel-badge">STACK // 2026</span>
            </div>

            <div className="about__skill-groups">
              {ABOUT_CONTENT.skillGroups.map((group) => (
                <div key={group.category} className="about__skill-group">
                  <h3 className="about__skill-category">{group.category}</h3>
                  <ul className="about__skill-list">
                    {group.items.map((skill) => (
                      <li key={skill} className="about__skill-pill">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
