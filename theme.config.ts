import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/logo.svg'

export default defineThemeConfig({
  name: 'jquest.dev',
  id: 'jquest-dev',
  logo: logoImage,
  seo: {
    title: 'jquest.dev',
    description:
      'The personal site of Josh G. featuring projects, writing, and developer notes.',
    author: 'Josh G.',
    image: previewImage, // Can also be a string e.g. '/social-preview-image.png',
  },
  colors: {
    primary: '#f18f01',
    secondary: '#048ba8',
    neutral: '#2e4057',
    outline: '#ff4500',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Blog',
        href: '/blog',
      },
      {
        type: 'link',
        label: 'Portfolio',
        href: '/portfolio',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
      {
        type: 'link',
        label: 'GitHub',
        href: 'https://github.com/shwaaa21',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/shwaaa21',
      icon: 'lucide:github',
    },
  ],
})
