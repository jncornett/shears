module.exports = {
  extends: 'airbnb',
  env: { browser: true },
  plugins: [ 'react' ],
  rules: {
    'semi': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'arrow-parens': [ 2, 'as-needed' ]
  },
  globals: {
    React: true,
    Component: true,
    PropTypes: true
  }
}