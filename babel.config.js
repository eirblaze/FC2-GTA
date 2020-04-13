const merge   = require('webpack-merge')

module.exports = function(api) {

  // 基本設定
  let return_module = {
    sourceType: "module",
    comments: !api.env('production'),
  }

  // IE11
  return_module = merge(return_module, {
    presets: [
      [
        "@babel/preset-env", {
          // 必要なpolyfillだけをimportするようにします
          // 設定の仕方が変わってた。 http://babababand.hatenablog.com/entry/2019/04/24/125922
          //
          // Babel7.4で非推奨になったbabel/polyfillの代替手段と設定方法 https://aloerina01.github.io/blog/2019-06-21-1
          //
          // useBuiltIns について 公式 https://babeljs.io/docs/en/babel-preset-env
          //
          corejs: 3, // or 2
          useBuiltIns: "entry",
          // useBuiltIns: "usage",
          // targets: {
          //   "ie": 11
          // },

        }
      ]
    ],
  })


  // TypeScript
  return_module = merge(return_module, {
    presets: [
      "@babel/preset-typescript",
    ],
    plugins: [
      // @see https://qiita.com/nacam403/items/edf3e2c8ff364aff910f
      // TypeScriptの文法には既に含まれているけど、
      // 今はまだpreset-envには含まれていない文法も使えるようにしておく。
      // preset-envに含まれる日が来たら、これらのプラグインは不要になるはず。
      "@babel/proposal-class-properties",
      "@babel/proposal-object-rest-spread"
    ]
  })

  // Jest
  if ( api.env("test") ) {
    return_module = merge(return_module, {
      plugins: [
        "transform-es2015-modules-commonjs", // babel-plugin-transform-es2015-modules-commonjs
      ]
    })
  }


  // 最終的な出力
  //console.log(return_module);
  return return_module

}

