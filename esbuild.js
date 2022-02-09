const ImportGlobPlugin = require('esbuild-plugin-import-glob').default;

require('esbuild').build({
  entryPoints: ['index.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [
    ImportGlobPlugin(),
  ],  
}).catch(() => process.exit(1))