// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MARS',
  tagline: 'Multi-Agent Research & Simulation',
  url: 'https://www.mars-group.org/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mars-group-haw', // Usually your GitHub org/user name.
  projectName: 'MARS-Group-HAW.github.io', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MARS-Group-HAW/MARS-Group-HAW.github.io/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MARS-Group-HAW/MARS-Group-HAW.github.io/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MARS',
        logo: {
          alt: 'MARS GROUP Logo',
          src: 'img/MARS GROUP Icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial/intro',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'api/index',
            position: 'left',
            label: 'API',
          },

          {to: '/blog', label: 'Blog', position: 'left'},

          {to: '/team', label: 'Team', position: 'left'},
          /*{to: '/student', label: 'For Students', position: 'left'},
          {to: '/publications', label: 'Publications', position: 'left'},*/
          {to: '/student', label: 'Offers for theses', position: 'left'},
          {
            to: '/projects',
            label: 'Projects',
            position: 'left',
            type: 'dropdown',
            items: [
              {
                label: 'ESIDA',
                to:'/projects/esida'
              },
              {
                label: 'SOHH',
                to:'/projects/smartopenhamburg'
              },
              {
                label: 'EMSAfrica',
                to:'/projects/emsafrica'
              }              
            ]
          },
          {
            type: 'dropdown',
            label: 'Student Work',
            position: 'left',
            items: [
              {
                label: 'Theses',
                to:'/student-work/theses'
              },
              {
                label: 'Posters',
                to:'/student-work/posters'
              }
            ],
          },
          {
            href: 'https://github.com/MARS-Group-HAW/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'MARS Framework',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial/intro',
              },
              {
                label: 'API',
                to: '/docfx/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/mars_group_haw',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@marsgroup5456'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MARS-Group-HAW/',
              },
              {
                label: 'Imprint',
                href: '/imprint',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MARS Group. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'csv'],
      },
    }),
};

module.exports = config;
