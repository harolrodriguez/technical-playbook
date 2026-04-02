import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  handbookSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Why We Exist',
      link: { type: 'generated-index' },
      items: [
        'why-we-exist/proposito-del-playbook',
        'why-we-exist/principios-de-ingenieria',
      ],
    },
    {
      type: 'category',
      label: 'Team & Roles',
      link: { type: 'generated-index' },
      items: [
        'team-and-roles/mapa-de-roles',
        'team-and-roles/responsabilidades-por-rol',
        'team-and-roles/matriz-raci',
        'team-and-roles/como-colaborar-entre-roles',
      ],
    },
    {
      type: 'category',
      label: 'Ways of Working',
      link: {
        type: 'doc',
        id: 'ways-of-working/intro',
      },
      items: [
        'ways-of-working/scrum',
        'ways-of-working/estimacion',
        'ways-of-working/priorizacion-de-bugs',
        'ways-of-working/definition-of-ready-done',
        'ways-of-working/slicing',
        'ways-of-working/tech-debt',
        'ways-of-working/tech-talks',
      ],
    },
    {
      type: 'category',
      label: 'Engineering Standards',
      link: { type: 'generated-index' },
      items: [
        {
          type: 'category',
          label: 'Git',
          link: { type: 'generated-index' },
          items: [
            'engineering-standards/git/branching-strategy',
            'engineering-standards/git/conventional-commits',
            'engineering-standards/git/pull-requests',
            'engineering-standards/git/code-review',
            'engineering-standards/git/merge-policies',
          ],
        },
        {
          type: 'category',
          label: 'Code Quality',
          link: { type: 'generated-index' },
          items: [
            'engineering-standards/code-quality/testing-philosophy',
            'engineering-standards/code-quality/linting-formatting',
            'engineering-standards/code-quality/performance-budgets',
          ],
        },
        {
          type: 'category',
          label: 'Security',
          link: { type: 'generated-index' },
          items: [
            'engineering-standards/security/secrets-management',
            'engineering-standards/security/dependency-scanning',
            'engineering-standards/security/minimum-privilege',
          ],
        },
        {
          type: 'category',
          label: 'API Design',
          link: { type: 'generated-index' },
          items: [
            'engineering-standards/api-design/response-structure',
            'engineering-standards/api-design/versioning',
            'engineering-standards/api-design/error-handling',
            'engineering-standards/api-design/documentation',
          ],
        },
        {
          type: 'category',
          label: 'Observability',
          link: { type: 'generated-index' },
          items: [
            'engineering-standards/observability/logging-format',
            'engineering-standards/observability/metrics-principles',
            'engineering-standards/observability/tracing-basics',
          ],
        },
        {
          type: 'category',
          label: 'Accessibility',
          link: { type: 'generated-index' },
          items: [
            'engineering-standards/accessibility/wcag-principles',
            'engineering-standards/accessibility/testing-checklist',
          ],
        },
        {
          type: 'category',
          label: 'Documentation',
          link: { type: 'generated-index' },
          items: [
            'engineering-standards/documentation/readme-standards',
            'engineering-standards/documentation/adr-process',
            'engineering-standards/documentation/inline-comments',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Spec-Driven Development',
      link: { type: 'generated-index' },
      items: [
        'spec-driven-development/que-problema-resuelve',
        'spec-driven-development/flujo-de-colaboracion',
        'spec-driven-development/contratos-entre-capas',
        'spec-driven-development/rol-del-composer',
        'spec-driven-development/senales-de-flujo-roto',
      ],
    },
    {
      type: 'category',
      label: 'Tooling & Setup',
      link: { type: 'generated-index' },
      items: [
        'tooling-and-setup/setup-entorno-local',
        'tooling-and-setup/herramientas-aprobadas',
        'tooling-and-setup/uso-de-ia',
        'tooling-and-setup/proveedores-externos',
      ],
    },
    {
      type: 'category',
      label: 'Career & Growth',
      link: { type: 'generated-index' },
      items: [
        'career-and-growth/feedback-tecnico',
        'career-and-growth/rfc-process',
      ],
    },
    {
      type: 'category',
      label: 'Security',
      link: { type: 'generated-index' },
      items: [
        'security/incidentes-de-seguridad',
        'security/gestion-de-dependencias',
        'security/minimo-privilegio',
      ],
    },
  ],
};

export default sidebars;
