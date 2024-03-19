# gdtcs_op_frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

GDTCS_OP_FRONTEND
├── .vscode # Visual Studio Code 설정
├── node_modules # npm 패키지 모듈
├── public # 정적 파일들 (index.html, favicon 등)
├── src # 소스 코드
│ ├── assets # 정적 자산 (이미지, 스타일 등)
│ ├── components # Vue 컴포넌트
│ │ ├── common # 재사용 가능한 공통 컴포넌트
│ │ └── layouts # 레이아웃 관련 컴포넌트
│ │ ├── AppFooter.vue # 앱 푸터 컴포넌트
│ │ ├── AppHeader.vue # 앱 헤더 컴포넌트
│ │ └── AppNav.vue # 앱 내비게이션 컴포넌트
│ ├── plugins # Vue 플러그인 (여기에는 Vuetify 설정 포함)
│ ├── router # Vue Router 설정
│ │ └── index.js # 라우터 설정 파일
│ ├── stores # 상태 관리 저장소 (Vuex, Pinia 등)
│ │ └── index.js # 상태 관리 설정 파일
│ ├── views # 뷰/페이지 컴포넌트
│ │ └── App.vue # 앱의 메인 컴포넌트
│ ├── App.vue # 루트 Vue 컴포넌트
│ └── main.js # 앱의 엔트리 포인트
├── .gitignore # Git에서 추적하지 않을 파일 설정
├── index.html # 메인 HTML 파일
├── jsconfig.json # JavaScript 프로젝트 설정 (VS Code에 사용됨)
├── package.json # 프로젝트 메타데이터와 종속성 목록
├── package-lock.json # 종속성의 정확한 버전을 잠그기 위한 파일
├── README.md # 프로젝트에 대한 설명을 담은 Markdown 파일
└── vite.config.js # Vite 구성 파일


### vue 스타일 가이드: ESLint와 Prettier 사용
1. package.json 에서 devDependencies 영역에 관련 라이브러리 설치

1) "@rushstack/eslint-patch": "^1.1.0"
2) "@vue/eslint-config-prettier": "^7.0.0"
3) "eslint": "^8.5.0"
4) "eslint-plugin-vue": "^9.22.0"
5) "prettier": "^2.5.1"

2. vscode에서 eslint 플러그인 설치(prettier플러그인은 충돌때문에 설치x)

3. vscode에서 저장누르면 eslint 자동 적용되서 저장 설정
File - Preference - Settings - lint 검색 - 작업영역(workspace) -  
하단으로 스크롤 Eslint: Validate - 아래코드추가

```sh
{
    // 기존 설정이 있다면 그 아래에 추가
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "eslint.validate": [
        

        "javascript",
        "javascriptreact",
        "vue",
        // 프로젝트에 맞는 다른 언어나 프레임워크 추가
    ],
}
```

한번에 모두 적용 하려면 
```sh
npm run lint
```

4. .eslintrc.cjs 설정파일
extends영역에는 공식문서에 나와있는 설정 적용

1) "plugin:vue/vue3-essential"
https://ko.vuejs.org/style-guide/ -> 스타일가이드와 우측에 ON THIS PAGE 참고

2) "eslint:recommended"
https://eslint.org/docs/rules -> 체크된 항목 자동으로 검사

3) "@vue/eslint-config-prettier"
https://prettier.io/docs/en/options -> 프리티어 doc



5. 설정에서 format on save 검색
Notebook › Format On Save: Enabled - 체크x