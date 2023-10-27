import esbuild from "esbuild";
import sassPlugin from "esbuild-plugin-sass";

esbuild.build({
  entryPoints: ['source/index.js'],
  bundle: true,
  outfile: 'docs/bundle.js',
  sourcemap: true,
  platform: "browser",
  minify: true,
  plugins: [sassPlugin()],
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
})
