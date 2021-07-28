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
    ['meta', {name: "theme-color", content: "#ffffff"}],
    ['meta', {property: "og:title", content: "Big Dipper 2.0 Cosmos Documentation"}],
    ['meta', {property: "og:url", content: " https://docs.bigdipper.live"}],
    ['meta', {property: "og:description", content: "Official Documentation for Big Dipper 2.0 Cosmos [UI]"}],
    ['meta', {property: "og:image", content: "https://docs.bigdipper.live/assets/cover.png"}],
    ['meta', {roperty: "og:type", content: "website"}],
    ['meta', {property: "og:locale", content: "en_US"}],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/assets/icons/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/icons/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/icons/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/assets/icons/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/assets/icons/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "favicon.ico"}],
    ['meta', { name: "msapplication-TileColor", content: "#3a0839"}],
    ['meta', { name: "msapplication-config", content: "/assets/icons/browserconfig.xml"}],
    ['meta', { name: "theme-color", content: "#ffffff"}],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
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
      {text: "Website", link: "https://bigdipper.live", target: "_blank"},
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
