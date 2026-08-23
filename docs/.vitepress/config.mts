import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'aiXP',
  description: 'Extreme Programming for Human-AI Teams of 1 to N',
  base: '/temp_name/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start reading', link: '/aixp/01-xp-practices-carried-over' }
    ],

    sidebar: [
      {
        text: 'aiXP',
        items: [
          { text: 'Part 1 — XP Practices Carried Over', link: '/aixp/01-xp-practices-carried-over' },
          { text: 'Part 2 — New Practices', link: '/aixp/02-new-practices' },
          { text: 'Part 3 — DevOps/SRE Practices', link: '/aixp/03-devops-practices' },
          { text: 'Part 4 — Testing Tiers', link: '/aixp/04-testing-tiers' },
          { text: 'Part 5 — Versioning', link: '/aixp/05-versioning' },
          { text: 'Part 6 — Comparison to AI-Native SDLC', link: '/aixp/06-comparison-ai-native-sdlc' },
          { text: 'Open Questions', link: '/aixp/open-questions' },
          { text: 'Appendix — Original 12 XP Practices', link: '/aixp/appendix-original-12' },
          { text: 'Bibliography', link: '/aixp/bibliography' }
        ]
      }
    ],

    socialLinks: []
  }
})
