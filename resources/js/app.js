import { createInertiaApp } from '@inertiajs/svelte'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.svelte', { eager: true })
    return pages[`./Pages/${name}.svelte`]
  },
  setup({ el, App, props }) {
    new App({ target: el, props })
  },
  progress:{
    delay:250,
    color:'#29d',
    includeCSS:true,
    showSpinner:true,
  }
})
