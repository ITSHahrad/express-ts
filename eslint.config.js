import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/type-annotation-spacing': 'error',
      
      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-vars': 'off', // Turned off in favor of @typescript-eslint/no-unused-vars
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'indent': ['error', 2],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always'],
      
      // Express specific
      'no-process-env': 'off', // Allow process.env access
      'no-unused-expressions': 'error',
      
      // Error handling
      'no-throw-literal': 'error',
      'prefer-promise-reject-errors': 'error',
      
      // Best practices
      'eqeqeq': ['error', 'always'],
      'no-var': 'error',
      'prefer-const': 'error',
      'arrow-body-style': ['error', 'as-needed']
    }
  }
];
