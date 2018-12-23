/**
 * JS表示方法いろいろ
 * たぶんどっかから引っ張ってきたやつ。jQueryに慣れてない時期のコード。
 */
window.onload = function onLoad() {

  /* タグのIDを指定して書き込む */
  target = document.getElementById("some_id");
  target.innerHTML = "はろー";

  /* ブラウザでF12押したら出てくるコンソール上に出力 */
  console.log(`はろー`);
}

/**
 * クロージャの実践例 - モジュールパターン
 * @see https://qiita.com/takeharu/items/4975031faf6f7baf077a
 */
var hello_module = (function() {
  var hello_output = '';

  // たぶんjson形式でリターンしてる
  return {
    addstr: function() {
      hello_output += 'hello ';
    },
    console_view: function() {
      console.log(hello_output);
    }
  };

})();

hello_module.console_view(); // 0

hello_module.addstr();
hello_module.console_view(); // 1

console.log(count); // undefined
