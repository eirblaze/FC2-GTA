// eslint-disable-next-line no-unused-vars
export default function pagination_arrow(url, text, title = '') {
  if (url == '') {
    document.write(`<b>${text}</b>`)
  } else {
    document.write(`<a href="${url}" title="${title}">${text}</a>`)
  }
}
