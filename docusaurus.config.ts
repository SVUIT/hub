import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UIT Resource Hub',
  tagline: 'Nơi tổng hợp những ưu đãi của các dịch vụ/phần mềm cho sinh viên UIT',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/uit-resource-hub/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            //'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'SVUIT',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        //{
         // type: 'docSidebar',
          //sidebarId: 'tutorialSidebar',
          //position: 'left',
          //label: 'Tutorial',
        //},
          { href: 'https://svuit.org/mmtt/', 
            label: 'Kho tài liệu', 
            position: 'right', 
          },
          { href: 'https://svuit.org/mmtt/docs/contribute', 
            label: 'Đóng góp', 
            position: 'right', 
          },
          { href: 'https://svuit.org/mmtt/docs/ThongBao/index', 
            label: 'Thông báo', 
            position: 'right', 
          },
        ],
      },
      footer: {
      style: 'dark',
      links: [
        {
          title: 'STUDY VAULT OF UIT',
          items: [
            { href: 'https://svuit.org/mmtt/', label: 'Kho tài liệu' },
            { href: 'https://svuit.org/mmtt/docs/contribute', label: 'Đóng góp' },
            { href: 'https://svuit.org/mmtt/docs/ThongBao/index', label: 'Thông báo' },
          ],
        },
      ],
      // Chèn icon ở phần dưới cùng
      copyright: `
        <div class="custom-social-icons">
          <a href="https://www.facebook.com/studyvault.uit" target="_blank" rel="noopener">
            <img src="img/icons/facebook.png" alt="Facebook" />
          </a>
          <a href="https://github.com/SVUIT/mmtt/releases" target="_blank" rel="noopener">
            <img src="img/icons/github.png" alt="YouTube" />
          </a>
          <a href="https://www.youtube.com/@svuit-mmtt" target="_blank" rel="noopener">
            <img src="img/icons/youtube.png" alt="YouTube" />
          </a>
        </div>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
