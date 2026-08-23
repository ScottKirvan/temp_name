import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "temp_name",
  description: "TODO: Replace with your project description.",
  base: '/temp_name/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/ScottKirvan/temp_name' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ScottKirvan/temp_name' },
      { icon: 'discord', link: 'https://discord.gg/TN6XJSNK5Y' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © Scott Kirvan'
    }
  }
})
