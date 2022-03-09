const { build } = require('esbuild')
const { solidPlugin } = require('esbuild-plugin-solid')

build({
  entryPoints: ['app.jsx'],
  bundle: true,
  outfile: 'dist/app.js',
  plugins: [solidPlugin()],
}).catch(() => process.exit(1))
