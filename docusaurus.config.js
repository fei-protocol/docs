// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tribe DAO Docs',
  tagline: `
  Tribe DAO is a community and ecosystem of decentralised finance protocols and products`,
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/docs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Tribe.png',
  organizationName: 'fei-protocol', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'master',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/fei-protocol/docs/tree/gh-pages',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Tribe DAO',
        logo: {
          alt: 'Tribe logo',
          src: 'img/Tribe.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'protocol/Overview',
            position: 'left',
            label: 'Fei Protocol',
            to: 'protocol/Overview'
          },
          {
            label: 'Rari Capital',
            href: 'https://docs.rari.capital/'
          },
          {
            type: 'doc',
            docId: 'Turbo/Overview',
            position: 'left',
            label: 'Turbo',
            to: 'Turbo/Overview'
          },
          {
            type: 'doc',
            docId: 'Launch/Overview',
            position: 'left',
            label: 'Launch',
            to: 'Launch/Overview'
          },
          {
            type: 'dropdown',
            label: 'Ecosystem',
            position: 'left',
            items: [
              {
                label: 'Volt Protocol',
                href: 'https://github.com/code-423n4/2022-03-volt/blob/main/SYSTEMARCHITECTURE.md'
              },
              {
                label: 'Midas Capital',
                href: 'https://twitter.com/MidasCapitalXYZ'
              },
              {
                label: 'Check the Chain (ctc)',
                href: 'https://ctc.readthedocs.io/en/latest/'
              },
              {
                label: 'ERC4626',
                href: 'https://github.com/fei-protocol/ERC4626'
              },
              {
                type: 'doc',
                docId: 'Flywheel/Overview',
                label: 'Flywheel',
                to: 'Flywheel/Overview'
              },
            ]
          },
          {
            href: 'https://github.com/fei-protocol',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'http://discord.gg/TeJFhrajSv',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/feiprotocol',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://medium.com/fei-protocol'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/fei-protocol',
              },
            ],
          },
        ],
      },
      prism: {
        additionalLanguages: ["solidity"],
        darkTheme: require("prism-react-renderer/themes/dracula"),
        theme: require("prism-react-renderer/themes/github")
      },
    }),
};

module.exports = config;
