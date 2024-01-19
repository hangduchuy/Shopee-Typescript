const path = require('path')

module.exports = {
  extends: [
    // Dùng các rule mặc định từ các plugin mà chúng ta đã cài.
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommend',
    'plugin:jsx-a11y/recommend',
    'plugin:@typescript-eslint/recommend',
    // Disable các rule mà eslint xung đột với prettier
    // Để cái này ở dưới đẻ nó override các rule phía trên.
    'eslint-config-prettier',
    'prettier'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      // Nói eslint-plugin-react tự động biết version của react
      version: 'detect'
    },
    // Nói ESLint cách xử lý các import
    'import/resolver': {
      node: {
        path: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    node: true
  },
  rules: {
    // Tắt rule yêu cầu import react trong file jsx
    'react/react-in-jsx-scope': 'off',
    // Cảnh báo khi thẻ <a target='_blank'> mà không có rel='noreferrer'
    'react/jsx-no-target-blank': 'warn',
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'always',
        semi: false,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
}
