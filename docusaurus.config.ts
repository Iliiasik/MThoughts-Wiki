import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Midnight Thoughts Wiki',
  tagline: '',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://Iliiasik.github.io',
  baseUrl: '/MThoughts-Wiki/',
  organizationName: 'Iliiasik',
  projectName: 'MThoughts-Wiki',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

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
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: 'Midnight Thoughts Logo',
        src: 'img/logo.png',
      },
      title: 'Wiki',
      items: [
        {
          to: '/blog',
          label: 'Updates',
          position: 'left',
        },
        {
          href: 'https://github.com/Iliiasik/MThoughts',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://github.com/Iliiasik/MThoughts/issues',
          label: 'Issues & Suggestions',
          position: 'right',
        },
        {
          href: 'https://www.curseforge.com/minecraft/mc-mods/midnight-thoughts',
          label: 'CurseForge',
          position: 'right',
        },
        {
          href: 'https://modrinth.com/mod/midnight-thoughts',
          label: 'Modrinth',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;