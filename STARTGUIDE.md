## Start
? Project name: knowledge
? Programming language: TypeScript
? Package manager: Yarn
? UI framework: None
? Nuxt.js modules: Axios - Promise based HTTP client
? Linting tools: ESLint, Prettier, Lint staged files, StyleLint, Commitlint
? Testing framework: None
? Rendering mode: Single Page App
? Deployment target: Server (Node.js hosting)
? Development tools: Dependabot (For auto-updating dependencies, GitHub only)
? Continuous integration: None
? What is your GitHub username? harutotanabe
? Version control system: Git

### Library

#### Common
yarn add moment
yarn add lodash
yarn add vee-validate
yarn add vue-chartjs

### Style
yarn add -D sass-loader
yarn add -D node-sass
yarn add -D sass-autoprefixer
yarn add -D stylelint-config-recommended-scss

### Style Very Hard Mode
yarn add -D stylelint-config-primer
yarn add -D @primer/css

custom stylelint.config.js
　- add primer/colors 
　- add primer/typography 

### packega.json Custom

Add yarn lint:fix

### Common Scss

yarn add -D nuxtjs/style-resources
custom nuxt.config.js
linter set up

### TODO LoadMap

- [x] Custom layout 
  →　Layoutフォルダ
- [x] Custom page
  →　Pageフォルダ
- [x] Custom component
  →　Componentフォルダ

- [x] Add Common UI component AppButton
　Componentフォルダ。AppButton
- Add ts.file And TypeScript
- [X] Add Common CS assets

- Add Graph
- [x] Add vue-chartjs
- [x] Add yarn add vue-chartjs 
- [x] Add yarn add chartjs-plugin-datalabels
- [x] Add plugins/vue-chart.ts
- [x] Add nuxt.config plugin set

- Add Transition

- Add Computed
算出プロパティとMethodの違いを要チェック
https://jp.vuejs.org/v2/guide/computed.html

- Add Method

- Add Data
- Add Axios And 型定義
- Add Async And Await!!!
- Add NuxtLink and await 
- Add Fetch

- Add Parent And Childe
-- props
-- emit

- ::v-deep
