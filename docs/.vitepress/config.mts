import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "C3 Steam Export Guide",
  description: "Helping users to export their C3 games",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Steam Export Guide', link: '/steam-export/' },
    ],

    sidebar: [
      {
        text: 'Steam Export Guide',
        items: [
          { text: 'Overview & Comparison', link: '/steam-export/' },
        ]
      },
      {
        text: 'Default Exporters (>450)',
        items: [
          { text: 'Webview2 / CEF', link: '/steam-export/default/webview2-cef' },
        ]
      },
      {
        text: 'Legacy Exporters (<450)',
        items: [
          { text: 'Webview2 / CEF', link: '/steam-export/legacy/webview2-cef' },
          { text: 'NW.js (Windows, Linux)', link: '/steam-export/legacy/nwjs' },
        ]
      },
      {
        text: 'Custom Exporters',
        items: [
          { text: 'Pipelab', link: '/steam-export/pipelab' },
          { text: 'Gemshell', link: '/steam-export/gemshell' },
        ]
      },
      {
        text: 'Uploading to Steam',
        link: '/steam-export/uploading-to-steam'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
