import esbuild from "esbuild";
import sassPlugin from "esbuild-plugin-sass";

esbuild.build({
  entryPoints: ['source/index.js'],
  bundle: true,
  outdir: 'www',
  assetNames: '[name]-[hash]',
  sourcemap: true,
  platform: "browser",
  minify: true,
  plugins: [sassPlugin()],
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  loader: {'.png': 'dataurl'}
})
