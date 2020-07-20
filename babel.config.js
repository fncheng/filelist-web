module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // .babelrc
  plugins: [
    [
      'import',
      {
        libraryName: 'view-design',
        libraryDirectory: 'src/components'
      }
    ]
  ]
}
