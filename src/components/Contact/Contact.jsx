import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Send } from 'lucide-react';
import { CONTACT_CONTENT, PERSONAL_INFO } from '../../data/portfolioData';
import './Contact.css';

const INITIAL_FORM = {
  name: '',
  email: '',
  projectType: CONTACT_CONTENT.projectTypes[0],
  message: '',
};

export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PERSONAL_INFO.email}`;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setError('Please fill in your name, email address, and project message.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitted(true);
    setError('');
    setFormData(INITIAL_FORM);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact__grid">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section__eyebrow">{CONTACT_CONTENT.eyebrow}</span>
            <h2 className="section__title contact__title">
              {CONTACT_CONTENT.headingLead}{' '}
              <span className="section__title-serif">{CONTACT_CONTENT.headingSerif}</span>{' '}
              {CONTACT_CONTENT.headingTail}
            </h2>
            <p className="contact__desc">{CONTACT_CONTENT.description}</p>

            <div className="contact__cards">
              <div className="contact__card">
                <div className="contact__card-icon" aria-hidden="true">
                  <Mail size={18} strokeWidth={2} />
                </div>
                <div className="contact__card-body">
                  <span className="contact__card-label">Direct Email</span>
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="contact__card-value">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="contact__copy-btn"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={15} strokeWidth={2.2} /> : <Copy size={15} strokeWidth={2} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="contact__card">
                <div className="contact__card-icon" aria-hidden="true">
                  <MapPin size={18} strokeWidth={2} />
                </div>
                <div className="contact__card-body">
                  <span className="contact__card-label">Based In</span>
                  <span className="contact__card-value">
                    {PERSONAL_INFO.location} • {PERSONAL_INFO.availability}
                  </span>
                </div>
              </div>
            </div>

            <div className="contact__socials">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn--secondary btn--sm"
              >
                <span>LinkedIn</span>
                <ArrowUpRight size={15} strokeWidth={2.1} />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn--secondary btn--sm"
              >
                <span>GitHub</span>
                <ArrowUpRight size={15} strokeWidth={2.1} />
              </a>
            </div>
          </motion.div>

          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <div className="contact__success" role="status">
                <div className="contact__success-icon" aria-hidden="true">
                  <Check size={22} strokeWidth={2.4} />
                </div>
                <h3 className="contact__success-title">Message Ready!</h3>
                <p className="contact__success-text">
                  Thanks for reaching out. You can also send your brief directly via email at{' '}
                  <a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a>.
                </p>
                <button
                  type="button"
                  className="btn btn--secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="contact-name" className="contact__label">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="e.g. Aarav Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact__input"
                      required
                    />
                  </div>

                  <div className="contact__field">
                    <label htmlFor="contact-email" className="contact__label">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact__input"
                      required
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-type" className="contact__label">
                    What are we building?
                  </label>
                  <select
                    id="contact-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="contact__input"
                  >
                    {CONTACT_CONTENT.projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-message" className="contact__label">
                    Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    placeholder="Share your goals, timeline, or links..."
                    value={formData.message}
                    onChange={handleChange}
                    className="contact__input contact__textarea"
                    required
                  />
                </div>

                {error && (
                  <p className="contact__error" role="alert">
                    {error}
                  </p>
                )}

                <button type="submit" className="btn btn--primary contact__submit">
                  <span>Send Message</span>
                  <Send size={16} strokeWidth={2.1} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
