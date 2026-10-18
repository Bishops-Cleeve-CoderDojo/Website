// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import { unified } from '@astrojs/markdown-remark'
import { visit } from 'unist-util-visit'

// Custom remark plugin to open external links in a new tab
function remarkExternalLinks() {
  return tree => {
    visit(tree, 'link', node => {
      if (/^https?:\/\//i.test(node.url) && !node.url.includes('bccd.uk')) {
        node.data = node.data || {}
        node.data.hProperties = node.data.hProperties || {}
        node.data.hProperties.target = '_blank'
        node.data.hProperties.rel = 'noopener noreferrer'
      }
    })
  }
}

// https://astro.build/config
export default defineConfig({
  site: 'https://bccd.uk',
  // Dedicated port so dev/preview don't collide with other Astro sites on 4321
  server: { port: 4322 },
  // Astro 7 defaults to JSX whitespace rules, which drops the space between
  // inline elements on separate lines (e.g. "CoderDojo</a>\n is"). Keep the
  // lossless v6 behaviour instead.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({ remarkPlugins: [remarkExternalLinks] }),
  },
})
