module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'prefer-const': 'error',
    'no-unused-vars': 'warn',
    'prettier/prettier': [
      'error',
      {
        printWidth: 100,
        semi: false,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],
  },
}
