import esbuild from "esbuild";
import pkg from 'five-server'
const { default: FiveServer } = pkg
import sassPlugin from "esbuild-plugin-sass";

await esbuild.build({
  entryPoints: ['source/index.js'],
  bundle: true,
  outfile: 'docs/bundle.js',
  sourcemap: true,
  platform: "browser",
  plugins: [sassPlugin()],
  target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
  watch: {
    onRebuild (error, result) {
      if (error) console.error('watch build failed:', error)
      else console.error('watch build succeeded:', result)
    }
  }
}).then(result => {
  // Call "stop" on the result when you're done
  console.log(result)

  new FiveServer().start({
    root: './docs',
    open: true,
    port: 8080
  })

})
