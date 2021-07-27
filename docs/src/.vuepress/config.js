module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Big Dipper 2.0 - Cosmos - Official Documentation [UI]',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Big Dipper 2.0 Official Documentation',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'forbole/big-dipper-2.0-cosmos',
    docsDir: 'docs',
    lastUpdated: true,
    logo: "/assets/logo.png",
    nav: [
      {text: "Website", link: "https://desmos.network", target: "_blank"},
  ],
    // sidebar: 'auto',
    sidebarDepth: 1,
    sidebar: [
      {
        title: "Documentation",
        collapsable: false,
        children: [
            ["/", "Overview"],
            ["documentation/prerequisites", "Prerequisites"],
            ["documentation/setup", "Setup"],
            ["documentation/customisation", "Customisation"]
        ]
      },
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
