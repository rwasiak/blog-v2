## 🎓 Personal Blog for sharing knowledge

<p>
<a href="https://github.com/rwasiak/blog-v2/actions"><img src="https://github.com/rwasiak/blog-v2/workflows/CI/badge.svg" /></a>
<a href="https://codeclimate.com/github/rwasiak/blog-v2/maintainability"><img src="https://api.codeclimate.com/v1/badges/9e1f560408f442031104/maintainability" /></a>
<a href="https://codeclimate.com/github/rwasiak/blog-v2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/9e1f560408f442031104/test_coverage" /></a>
</p>

If you see any improvements which can be done in this code, I encourage you to make a PR.

## 🛠 What's inside?

1. [Gatsby](https://www.gatsbyjs.org/) - static site generator based on React
2. [TypeScript](https://www.typescriptlang.org/) support
3. Generating types from graphql queries - [gatsby-plugin-graphql-codegen](https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen/?=gatsby-plugin-graphql-codegen)
4. CSS in JS - [Styled components](https://www.styled-components.com/)
5. Basic design system with themes - [Styled system](https://styled-system.com/)
6. MDX format available - [JSX in Markdown](https://github.com/mdx-js/mdx)
7. [Prettier](https://prettier.io/) - code formater
8. ESlint configuration:
   - [Airbnb React/JSX style guide](https://github.com/airbnb/javascript/tree/master/react)
   - [a11y rules](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
   - compatibility with Jest, Prettier and React hooks
9. [Stylelint](https://stylelint.io/) - styles linter compatible with styled-components
10. Pre-Commit Hooks - [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged):
    - code formatting
    - ESlint checks
    - stylelint
    - TypeScript checks
11. [Jest](https://jestjs.io/) - JavaScript Testing Framework with rich configuration:
    - [React Testing Library](https://github.com/testing-library/react-testing-library) inside
    - [Axe](https://github.com/nickcolley/jest-axe) - custom Jest matcher for testing accessibility
12. [CI pipline](https://github.com/rwasiak/blog-v2/actions) with >80% tests coverage connected with [Code Climate](https://codeclimate.com/github/rwasiak/blog-v2) (automated code review and quality analytics)

## 🚀 Quick start

1. clone this project
2. npm install or yarn install
3. npx gatsby develop
4. site is available on localhost:4000/

## 🏛 Licenses

The MIT License (MIT)

### Except for posts content

Every post inside `./posts` is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-nc-sa/4.0/).
