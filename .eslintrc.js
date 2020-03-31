// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'no-tabs': 0,
    'keyword-spacing': ["error", { "overrides": {
      // if()    else if() 在if 和 else if 在关键字后禁止使用空格
      "if": { "after": true },
      // for(;;) for和( 之间禁止使用空格
      "for": { "after": true },
      // while()
      "while": { "after": true }
    } }],
    // 函数声明时'('前是是否加一个空格
    'space-before-function-paren': 0
    // [
    //   'error',{
    //     anonymous: 'never',
    //     named: 'never',
    //     asyncArrow: 'always'
    //   }
    // ]
  }
}
