import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  knowledgeBaseSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Git Guide',
      items: [
        'git-guide/README',
        {
          type: 'category',
          label: 'Fundamentos',
          items: [
            'git-guide/fundamentos/que-es-git',
            'git-guide/fundamentos/por-que-usar-git',
            'git-guide/fundamentos/control-de-versiones',
            'git-guide/fundamentos/gestion-codigo-fuente',
          ],
        },
        {
          type: 'category',
          label: 'Instalación y Configuración',
          items: [
            'git-guide/instalacion-configuracion/instalar-git',
            'git-guide/instalacion-configuracion/git-config',
            'git-guide/instalacion-configuracion/git-ssh',
          ],
        },
        {
          type: 'category',
          label: 'Configuración de Repositorio',
          items: [
            'git-guide/configuracion-repositorio/git-init',
            'git-guide/configuracion-repositorio/git-clone',
          ],
        },
        {
          type: 'category',
          label: 'Guardado de Cambios',
          items: [
            'git-guide/guardado-cambios/git-add',
            'git-guide/guardado-cambios/git-commit',
            'git-guide/guardado-cambios/gitignore',
          ],
        },
        {
          type: 'category',
          label: 'Deshacer Cambios',
          items: [
            'git-guide/deshacer-cambios/git-reset',
            'git-guide/deshacer-cambios/git-revert',
          ],
        },
        {
          type: 'category',
          label: 'Ramas y Fusión',
          items: [
            'git-guide/ramas-fusion/git-branch',
          ],
        },
        {
          type: 'category',
          label: 'Operaciones Avanzadas',
          items: [
            'git-guide/operaciones-avanzadas/git-rebase',
            'git-guide/operaciones-avanzadas/git-merge',
            'git-guide/operaciones-avanzadas/git-log',
          ],
        },
        {
          type: 'category',
          label: 'Temas Especiales',
          items: [
            'git-guide/temas-especiales/gitops',
            'git-guide/temas-especiales/git-alias',
            'git-guide/temas-especiales/git-lfs',
          ],
        },
        'git-guide/GLOSARIO',
      ],
    },
    {
      type: 'category',
      label: 'Best Practices',
      items: [
        'best-practices/error-handling',
        'best-practices/state-management',
        'best-practices/async-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/debugging-guide',
      ],
    },
  ],
};

export default sidebars;
