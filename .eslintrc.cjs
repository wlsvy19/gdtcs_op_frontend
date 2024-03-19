require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
    node: true, // Node.js 환경을 위한 설정 추가
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 개발 환경에서는 콘솔 로그 사용 허용
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all', // 후행 콤마 설정
        printWidth: 80, // 한줄에 80자 넘지 않도록
        bracketSpacing: true, // 객체 리터럴의 중괄호 {} 안에 공백을 추가 -> const obj = { foo: 'bar' };
        arrowParens: 'always', // 화살표 함수에서 단일 파라미터를 받을 경우 괄호를 생략여부
      },
    ],
  },
};
