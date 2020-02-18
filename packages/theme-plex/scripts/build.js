const ParcelBundler = require('parcel-bundler');
const path = require('path');

// Single entrypoint file location:
const entryFiles = path.join(__dirname, '../src/index.js');

const options = {
  outDir: './dist',
  target: 'node',
  cache: false,
  minify: true,
  scopeHoist: true,
  watch: false
};

(async function() {
  const bundler = new ParcelBundler(entryFiles, options);
  const bundle = await bundler.bundle();
})();
