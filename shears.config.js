module.exports = {
  // list of browsers to support
  // items are queries used by https://github.com/browserslist/browserslist 
  browserTargets: [
    "last 1 Chrome version",
    "last 1 Firefox version",
  ],
  // main entry point
  entryPoint: './src/index.jsx',
  // hot module reloading entry point
  hmrEntryPoint: './src/index.jsx',
  // index html page
  indexHtml: './src/index.html'
}