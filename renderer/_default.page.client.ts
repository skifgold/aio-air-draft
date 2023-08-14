export { render }

import { createPageApp } from './app'
import { PageContextBuiltIn } from "vite-plugin-ssr/types";
import { PageContext } from "./types";

// This render() hook only supports SSR, see https://vite-plugin-ssr.com/render-modes for how to modify render() to support SPA
// async function render(pageContext: PageContextClient) {
async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page } = pageContext
  // if (!Page) throw new Error('Client-side render() hook expects pageContext.Page to be defined')
  
  const app = createPageApp({
    pageContext,
    clientOnly: document.getElementById('page')?.innerHTML === ''
  })
  
  app.mount('#page')
}

/* To enable Client-side Routing:
export const clientRouting = true
// !! WARNING !! Before doing so, read https://vite-plugin-ssr.com/clientRouting */
