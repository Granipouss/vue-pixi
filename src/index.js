const version = process.env.VERSION || require('../package.json').version
const componentFiles = require.context('./components', false, /\.(js|vue)$/)

const VuePixi = {
  install (Vue, options) {
    componentFiles.keys().forEach(key => {
      let name = 'Pixi' + key.replace(/(\.\/|\.(js|vue))/g, '')
      let component = componentFiles(key).default || componentFiles(key)
      Vue.component(name, component)
    })
  },
  version: version
}

export default VuePixi

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePixi)
}
