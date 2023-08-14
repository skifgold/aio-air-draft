import { createSSRApp, createApp, defineComponent, h } from 'vue'
import PageShell from './PageShell.vue'
import { setPageContext } from './usePageContext'
import type { Component, PageContext, PageContextClient, PageProps } from './types'
import { PageContextBuiltIn } from "vite-plugin-ssr/types"

// export { createApp }
export { createPageApp }

// function createApp(Page: Component, pageProps: PageProps | undefined, pageContext: PageContext) {
//   const PageWithLayout = defineComponent({
//     render() {
//       return h(
//         PageShell,
//         {},
//         {
//           default() {
//             return h(Page, pageProps || {})
//           }
//         }
//       )
//     }
//   })

//   const app = createSSRApp(PageWithLayout)

//   // Make pageContext available from any Vue component
//   setPageContext(app, pageContext)

//   return app
// }

interface appPayload {
  // Page: Component,
  // pageProps: PageProps|undefined,
  pageContext: PageContextBuiltIn & PageContext,
  clientOnly?: boolean
}


function createPageApp(payload: appPayload) {
  const { pageContext, clientOnly=false } = payload;
  const {Page: PageComponent, pageProps} = pageContext;
  const createAppFunction = clientOnly ? createApp : createSSRApp;

  const AppComponent = {
    render() {
      const renderLayoutSlot = ()=> h(PageComponent, pageProps || {});
      return h(PageShell, pageProps || {}, {default: renderLayoutSlot})
    }
  }

  const page = createAppFunction(AppComponent);
  // page.provide('pageContext', pageContext);

  setPageContext(page, pageContext)
  return page;

} 