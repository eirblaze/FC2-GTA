/**
 * Rawgit終了にあたり、とりいそぎjsDelivrでアセットを配信する
 * @see https://qiita.com/pokkur/items/40ded290fc5122bfe238
 *
 * @cdn https://cdn.jsdelivr.net/gh/eirblaze/FC2-GTA@latest/html/dist/script.min.js
 */

/**
 * ▼ ヘッダーナビをスクロールに応じて操作 ▼
 * @see http://black-flag.net/jquery/20100607-1138.html
 * @see https://gist.github.com/violetyk/5343883
 * @see https://qiita.com/kazTera/items/ab5dd9fb5b2579b25c4d
 */
/*
$(function(){
  var start_pos = 0;

  $(window).scroll(function(e){
    //var jQmenu = $('#menu');
    var current_pos = $(this).scrollTop();

    console.info(`current_pos: ${current_pos}`);
    if (
      current_pos > start_pos
      && current_pos > 530
      && !$('#menu').is( ":hidden" )
    ) {
      // 下へ
      $('#menu').slideUp();
    } else {
      // 上へ
      $('#menu').slideDown();
    }
    start_pos = current_pos;
  });

});
*/


/**
 * シェアボタン
 */
// DOM書き換え
$(document).ready(function(){

  if (navigator.share) {
    /*
    <li><a href="javascript:void(0)" onclick="shareAPI();"><i class="fas fa-share-square"></i>
    <span class="linkname en">Share</span><span class="linkname jp">共有する</span></a></li>
    */
    $('#menu-share-button').html('\
<a href="javascript:void(0)" onclick="shareAPI();">\
<i class="fas fa-share-square"></i>\
<span class="linkname en">Share</span><span class="linkname jp">共有する</span>\
</a>\
    ');
  }

});

// 本体
function shareAPI() {
  if (navigator.share) {
    var url = document.location.href;
    var canonicalElement = document.querySelector('link[rel=canonical]');
    if (canonicalElement !== null) {
      url = canonicalElement.href;
    }
    navigator.share({
      title: share_title,
      text: share_text,
      url: url
    })
    //.then(() => console.log('Successful share'))
    //.catch((error) => console.log('Error sharing', error));
  }
}
