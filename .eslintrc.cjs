module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  overrides: [{ files: ['*.config.js'], env: { node: true } }],
  rules: {
    'react/jsx-no-target-blank': 'off',
    // Plain JS project without PropTypes; React import kept for clarity in JSX files
    'react/prop-types': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
