import { motion } from 'framer-motion';
import { ArrowUpRight, Layers, MapPin, Sparkles } from 'lucide-react';
import { HERO_CONTENT, PERSONAL_INFO } from '../../data/portfolioData';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        {/* Left Editorial Content */}
        <div className="hero__content">
          <motion.div
            className="hero__availability"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.05}
          >
            <span className="hero__pulse" aria-hidden="true" />
            <span>{PERSONAL_INFO.availability}</span>
          </motion.div>

          <motion.p
            className="hero__eyebrow"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.12}
          >
            {HERO_CONTENT.eyebrow}
          </motion.p>

          <motion.h1
            className="hero__title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            Designing{' '}
            <span className="hero__title-serif">Digital Experiences</span> That{' '}
            <span className="hero__title-highlight">Make an Impact.</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.28}
          >
            {HERO_CONTENT.description}
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.36}
          >
            <a href={HERO_CONTENT.primaryCta.href} className="btn btn--primary">
              <span>{HERO_CONTENT.primaryCta.label}</span>
              <ArrowUpRight size={17} strokeWidth={2.2} />
            </a>

            <a href={HERO_CONTENT.secondaryCta.href} className="btn btn--secondary">
              <span>{HERO_CONTENT.secondaryCta.label}</span>
            </a>
          </motion.div>

          <motion.dl
            className="hero__meta"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.44}
          >
            {HERO_CONTENT.highlights.map((item) => (
              <div key={item.label} className="hero__meta-item">
                <dt className="hero__meta-label">{item.label}</dt>
                <dd className="hero__meta-value">{item.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right Editorial Portrait / Visual Composition */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero__frame">
            <div className="hero__frame-header">
              <span className="hero__frame-tag">
                <MapPin size={13} strokeWidth={2} />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="hero__frame-code">PORTFOLIO // 01</span>
            </div>

            <div className="hero__portrait-box">
              {PERSONAL_INFO.profileImage ? (
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={`${PERSONAL_INFO.fullName} — ${PERSONAL_INFO.role}`}
                  className="hero__portrait-img"
                />
              ) : (
                <div
                  className="hero__portrait-placeholder"
                  role="img"
                  aria-label="Editorial profile visual placeholder for Sunil Kumar"
                >
                  <div className="hero__grid-pattern" aria-hidden="true" />

                  <svg
                    className="hero__portrait-svg"
                    viewBox="0 0 240 280"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <circle cx="120" cy="96" r="46" fill="#141413" />
                    <path
                      d="M42 258C42 204.981 76.9218 162 120 162C163.078 162 198 204.981 198 258"
                      fill="#141413"
                    />
                    <circle
                      cx="182"
                      cy="62"
                      r="18"
                      fill="#C9F166"
                      stroke="#141413"
                      strokeWidth="2"
                    />
                    <path
                      d="M176 62L180.5 66.5L189 57.5"
                      stroke="#141413"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="hero__placeholder-note">
                    Profile Photo Placeholder
                  </span>
                </div>
              )}
            </div>

            <div className="hero__frame-footer">
              <div>
                <p className="hero__card-name">{PERSONAL_INFO.fullName}</p>
                <p className="hero__card-role">{PERSONAL_INFO.role}</p>
              </div>
              <span className="hero__lime-chip">
                <Sparkles size={13} strokeWidth={2.2} />
                <span>UI + Code</span>
              </span>
            </div>
          </div>

          <motion.div
            className="hero__floating-card"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__floating-icon" aria-hidden="true">
              <Layers size={16} strokeWidth={2} />
            </div>
            <div>
              <p className="hero__floating-title">Core Craft</p>
              <p className="hero__floating-sub">
                {HERO_CONTENT.coreStackTags.join(' • ')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
