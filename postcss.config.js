const merge   = require('webpack-merge')

const _postcss_config = postcss_config()
module.exports = _postcss_config

function postcss_config() {

  // is_dev
  const is_dev = (process.env.NODE_ENV != 'production')

  let r_module = {}

  r_module = merge(r_module,{
    plugins: {
      'autoprefixer': {
        overrideBrowserslist: [
          'last 1 version',
          '> 1%',
          'ie 11'
        ],
        grid: "autoplace",
      },
      'postcss-normalize-charset': {},
    }
  })

  if ( !is_dev ) {
    r_module = merge(r_module,{
      plugins: {
        'cssnano': {autoprefixer: false},
      }
    })
  }

  return r_module
}
