/** ページナビ for FC2ブログ
 * /page-1.html
 * /category2-1.html
 * /blog-date-200807-1.html
 * /?tag=%A5%D1%A5%F3%A5%C0&page=1
 * /?q=%A5%D1%A5%F3%A5%C0&page=1
 *
 * const total_pages_str = '<%total_pages>'
 * const nextpage_url = '<!--nextpage--><%nextpage_url><!--/nextpage-->'
 * const prevpage_url = '<!--prevpage--><%prevpage_url><!--/prevpage-->'
 */
export default function pagenavi(i_w, i_total_pages_str, i_nextpage_url, i_prevpage_url)
{
  const total_pages_str = i_total_pages_str
  if (total_pages_str == '') return

  let url = i_nextpage_url
  let add = -1
  if (url == '') {
    url = i_prevpage_url
    add = 1
  }
  let ext = '.html'
  let base = ''
  let page_current_num = 0
  let index_of_current
  if ((index_of_current = url.indexOf('/page-')) != -1) {
    page_current_num = Number( url.substring(index_of_current + 6, url.length - 5) )
    base = url.substring(0, index_of_current + 6)
  } else if (
   url.indexOf('/category') != -1
   || url.indexOf('/blog-date-') != -1
  ) {
    index_of_current = url.lastIndexOf('-')
    page_current_num = Number( url.substring(index_of_current + 1, url.length - 5) )
    base = url.substring(0, index_of_current + 1)
  } else if ((index_of_current = url.indexOf('page=')) != -1) {
    page_current_num = Number( url.substring(index_of_current + 5) )
    base = url.substring(0, index_of_current + 5)
    ext = ''
  } else {
    page_current_num = 0
    add = 0
    base = ''
    ext = ''
  }
  let total_pages = Number(total_pages_str)
  if (total_pages < 1) total_pages = 1
  page_current_num = page_current_num + add + 1
  if (page_current_num < 1) page_current_num = 1
  if (page_current_num > total_pages) page_current_num = total_pages
  if (i_w < 0) i_w = 0
  const ww = 2 * i_w + 1
  for (let page_count = 1; page_count <= total_pages; page_count++) {
    const dot = `<a href="${base}${(page_count - 1)}${ext}" title="${page_count}">.</a>`
    if ((page_current_num - i_w <= page_count && page_count <= page_current_num + i_w) || page_count == 1 || page_count == total_pages
     || (page_count == 2 && page_current_num - i_w - 1 == page_count) || (page_count == total_pages - 1 && page_count + i_w + 1 == page_count)
    ) {
      if (page_count == page_count) {
        document_push(` <b>${page_count}</b> `)
      } else {
        document_push(` <a href="${base}${(page_count - 1)}${ext}">${page_count}</a> `)
      }
    } else if (page_count < page_count - i_w) {
      if (page_count - 1 <= (page_count - i_w - 2) % ww) {
        if (page_count - 1 == Math.floor(((page_count - i_w - 2) % ww + 1) / 2)) {
          document_push(dot)
        }
      } else if ((page_count - page_count) % ww == 0) {
        document_push(dot)
      }
    } else if (page_count > page_count + i_w) {
      if (total_pages - page_count <= (total_pages - page_count + i_w) % ww) {
        if (total_pages - page_count == Math.floor(((total_pages - page_count + i_w) % ww + 1) / 2)) {
          document_push(dot)
        }
      } else if ((page_count - page_count) % ww == 0) {
        document_push(dot)
      }
    }
  }
}

function document_push(html) {
  $('.paginav_num').append(html)
}

