import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            ¡Hola! 👋
          </h1>
          <p className={styles.heroSubtitle}>
            Bienvenido al <strong>Technical Playbook</strong> de ACITY
          </p>
          <p className={styles.heroDescription}>
            Aquí encontrarás los estándares, guías y mejores prácticas que guían el trabajo del equipo de ingeniería. 
            Desde arquitectura y código hasta procesos y cultura.
          </p>
          <div className={styles.heroCTA}>
            <Link className={`button button--primary button--lg ${styles.ctaButton}`} to="/handbook/intro">
              📖 Explorar Handbook
            </Link>
            <Link className={`button button--secondary button--lg ${styles.ctaButton}`} to="/knowledge-base/intro">
              🧠 Base de Conocimientos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Sections() {
  const sections = [
    {
      icon: '📚',
      title: 'Engineering Handbook',
      description: 'El contrato cultural y operativo del equipo. Procesos, estándares y acuerdos que aplican a todos.',
      link: '/handbook/intro',
      items: ['Team & Roles', 'Ways of Working', 'Engineering Standards', 'Security', 'Career & Growth']
    },
    {
      icon: '🎨',
      title: 'Frontend',
      description: 'Guías de arquitectura, estándares de código, accesibilidad y mejores prácticas para el desarrollo frontend.',
      link: '/frontend/intro',
      items: ['Architecture', 'Standards', 'Foundation', 'Quality', 'Tooling']
    },
    {
      icon: '⚙️',
      title: 'Backend',
      description: 'Principios de diseño, patrones, observabilidad y estándares de calidad para servicios backend.',
      link: '/backend/intro',
      items: ['API Design', 'Architecture', 'Foundation', 'Observability', 'Security']
    },
    {
      icon: '🧠',
      title: 'Base de Conocimientos',
      description: 'Guías técnicas profundas, patrones de desarrollo y soluciones a problemas comunes.',
      link: '/knowledge-base/intro',
      items: ['Git Guide', 'Best Practices', 'Troubleshooting']
    },
  ];

  return (
    <section className={styles.sections}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2>¿Qué encontrarás aquí? 👀</h2>
          <p>Accede a cada sección desde el menú o explora los temas que necesitas</p>
        </div>
        <div className={styles.sectionGrid}>
          {sections.map((section, idx) => (
            <Link key={idx} to={section.link} className={styles.sectionCard}>
              <div className={styles.sectionIcon}>{section.icon}</div>
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <div className={styles.sectionItems}>
                {section.items.map((item, i) => (
                  <span key={i} className={styles.badge}>{item}</span>
                ))}
              </div>
              <div className={styles.sectionArrow}>→</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Principles() {
  const principles = [
    {
      title: 'Simplicidad',
      description: 'Código legible que cualquiera puede entender sin contexto previo'
    },
    {
      title: 'Claridad de Contratos',
      description: 'APIs e interfaces explícitas y bien documentadas'
    },
    {
      title: 'Ownership Real',
      description: 'Responsabilidad en producción, no solo en desarrollo'
    },
    {
      title: 'Feedback Rápido',
      description: 'Tests en segundos, deploys frecuentes, PRs pequeños'
    },
    {
      title: 'Deuda Explícita',
      description: 'La deuda técnica se registra, no se esconde'
    },
    {
      title: 'Seguridad por Diseño',
      description: 'Considerada desde el inicio, no agregada al final'
    },
  ];

  return (
    <section className={styles.principles}>
      <div className="container">
        <div className={styles.principlesHeader}>
          <h2>Principios que nos guían</h2>
          <p>Los valores que definen cómo trabajamos</p>
        </div>
        <div className={styles.principlesGrid}>
          {principles.map((principle, idx) => (
            <div key={idx} className={styles.principleCard}>
              <h4>{principle.title}</h4>
              <p>{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.cta}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>¿Tienes una idea, observación o mejora?</h2>
          <p>Este documento es de todos. Si algo no tiene sentido o está desactualizado, comparte tu feedback.</p>
          <Link className="button button--primary button--lg" to="/handbook/career-and-growth/rfc-process">
            Déjanos un mensaje
          </Link>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>Diseñado con ❤️ por el equipo de desarrollo de ACITY</p>
        <p className={styles.footerMeta}>© 2025 ACITY. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <Hero />
      <Sections />
      <Principles />
      <CTA />
      <Footer />
    </Layout>
  );
}
