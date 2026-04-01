import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  knowledgeBaseSidebar: [
    {
      type: 'category',
      label: 'Git Guide',
      items: [
        'git-guide/setup-ssh',
        'git-guide/merge-strategies',
        'git-guide/conflict-resolution',
        'git-guide/reset-revert-rebase',
        'git-guide/advanced-log',
        'git-guide/git-hooks',
        'git-guide/cherry-pick',
        'git-guide/submodules-subtrees',
        'git-guide/maintenance',
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
