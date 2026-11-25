import { motion } from 'framer-motion';
import { Check, Code2, Globe, Layers, Palette } from 'lucide-react';
import { SERVICES_CONTENT } from '../../data/portfolioData';
import './Services.css';

const ICON_MAP = {
  Palette,
  Code2,
  Layers,
  Globe,
};

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <motion.div
          className="section__header section__header--split"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <span className="section__eyebrow">{SERVICES_CONTENT.eyebrow}</span>
            <h2 className="section__title">
              {SERVICES_CONTENT.headingLead}{' '}
              <span className="section__title-serif">{SERVICES_CONTENT.headingSerif}</span>{' '}
              {SERVICES_CONTENT.headingTail}
            </h2>
          </div>
          <p className="section__subtitle">{SERVICES_CONTENT.subtitle}</p>
        </motion.div>

        <div className="services__grid">
          {SERVICES_CONTENT.items.map((service, index) => {
            const Icon = ICON_MAP[service.icon] || Layers;
            return (
              <motion.article
                key={service.number}
                className="service-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: 0.06 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="service-card__top">
                  <div className="service-card__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.9} />
                  </div>
                  <span className="service-card__num">{service.number}</span>
                </div>

                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>

                <ul className="service-card__list">
                  {service.deliverables.map((item) => (
                    <li key={item} className="service-card__item">
                      <Check size={14} strokeWidth={2.4} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
