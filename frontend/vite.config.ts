import {resolve} from 'path';
import {defineConfig} from 'vite'
import handlebars from 'vite-plugin-handlebars';

const root = resolve(__dirname, 'src')

const pageData = {
  '/index.html': {
    isHome: true,
    title: 'Main Page',
  },
  '/lower/index.html': {
    isHome: false,
    title: 'lower',
  },
};

export default defineConfig({
  root: root,
  publicDir: '../public',
  base: './',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'main': resolve(root, 'index.html'),
        'lower': resolve(root, 'lower/index.html'),
        'lower/detail': resolve(root, 'lower/detail.html'),
      }
    },
    emptyOutDir: true,
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(root, 'components'),
      context: (pagePath) => {
        return pageData[pagePath  as keyof typeof pageData];
      },
    }) as Plugin,
  ],
});