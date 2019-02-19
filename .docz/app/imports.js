export const imports = {
  'docs/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-index" */ 'docs/index.mdx'),
  'docs/Components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-components-button" */ 'docs/Components/Button.mdx'),
  'docs/DesignToken/Color.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-design-token-color" */ 'docs/DesignToken/Color.mdx'),
  'docs/DesignToken/LayoutScale.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-design-token-layout-scale" */ 'docs/DesignToken/LayoutScale.mdx'),
  'docs/DesignToken/Radius.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-design-token-radius" */ 'docs/DesignToken/Radius.mdx'),
  'docs/DesignToken/SpacingScale.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-design-token-spacing-scale" */ 'docs/DesignToken/SpacingScale.mdx'),
  'docs/DesignToken/Typography.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-design-token-typography" */ 'docs/DesignToken/Typography.mdx'),
  'docs/Guidelines/Accessibility.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-guidelines-accessibility" */ 'docs/Guidelines/Accessibility.mdx'),
  'docs/Guidelines/Test.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "docs-guidelines-test" */ 'docs/Guidelines/Test.mdx'),
}
