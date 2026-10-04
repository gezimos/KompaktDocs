import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'KompaktOS',
  tagline: 'LineageOS 23.2 Unofficial for the Mudita Kompakt',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://kompaktos.gez.im',
  baseUrl: '/',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap',
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
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
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {from: ['/install/requirements', '/docs/install/requirements'], to: '/prepare/requirements'},
        ],
        createRedirects(path: string) {
          if (path === '/') return ['/docs', '/docs/intro'];
          if (path === '/support') return undefined;
          return [`/docs${path}`];
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'release-1-1',
      content:
        '<b>KompaktOS 1.1</b>, Before you start installation read <a href="/prepare/requirements">Requirements</a> &amp; <a href="/prepare/mtkclient">Backup</a>',
      isCloseable: false,
    },
    navbar: {
      logo: {
        alt: 'KompaktOS',
        src: 'img/kompaktos-logo.svg',
        srcDark: 'img/kompaktos-logo-dark.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/support',
          label: 'Support',
          position: 'left',
        },
        {
          type: 'dropdown',
          label: 'Source',
          position: 'left',
          items: [
            {href: 'https://github.com/gezimos/KompaktOS', label: 'ROM'},
            {href: 'https://github.com/gezimos/KompaktDevice', label: 'Kernel'},
          ],
        },
        {
          type: 'dropdown',
          label: 'Launchers',
          position: 'left',
          items: [
            {href: 'https://github.com/gezimos/inkOS', label: 'inkOS'},
            {href: 'https://github.com/gezimos/Katapult', label: 'Katapult'},
          ],
        },
        {
          type: 'html',
          position: 'right',
          className: 'bmc-item',
          value:
            '<a href="https://www.buymeacoffee.com/gezimos" target="_blank" rel="noopener noreferrer" class="bmc-button"><img src="/img/bmc.svg" alt="Buy me a coffee"></a>',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright:
        'KompaktOS is an independent project, not affiliated with Mudita, ' +
        'and unrelated to CompactOS or Microsoft. ' +
        'Installing it replaces your phone\u2019s software at your own risk, with no warranty. ' +
        'Built on <a href="https://lineageos.org">LineageOS</a> and AOSP.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
