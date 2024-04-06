import esbuild from "esbuild";
import sassPlugin from "esbuild-plugin-sass";

let ctx = await esbuild.context({
  entryPoints: ['source/index.js'],
  bundle: true,
  outdir: 'www',
  sourcemap: true,
  platform: "browser",
  plugins: [sassPlugin()],
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  loader: {'.png': 'dataurl'}
})

let {host, port} = await ctx.serve({
  servedir: 'www'
})

console.log(`Serving on http://${host}:${port}`)
