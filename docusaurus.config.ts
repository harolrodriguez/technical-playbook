import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Technical Playbook',
  tagline: 'Engineering guidelines for everyone',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'your-org',
  projectName: 'technical-playbook',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          id: 'handbook',
          path: 'docs/handbook',
          routeBasePath: 'handbook',
          sidebarPath: require.resolve('./sidebars/handbook.ts'),
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'frontend',
        path: 'docs/frontend',
        routeBasePath: 'frontend',
        sidebarPath: require.resolve('./sidebars/frontend.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'backend',
        path: 'docs/backend',
        routeBasePath: 'backend',
        sidebarPath: require.resolve('./sidebars/backend.ts'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'qa',
        path: 'docs/qa',
        routeBasePath: 'qa',
        sidebarPath: require.resolve('./sidebars/qa.ts'),
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Technical Playbook',
      logo: {
        alt: 'Technical Playbook',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'handbookSidebar',
          docsPluginId: 'handbook',
          label: 'Handbook',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'frontendSidebar',
          docsPluginId: 'frontend',
          label: 'Frontend',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'backendSidebar',
          docsPluginId: 'backend',
          label: 'Backend',
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'qaSidebar',
          docsPluginId: 'qa',
          label: 'QA',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Technical Playbook`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
