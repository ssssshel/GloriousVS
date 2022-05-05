import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import '../styles/globals.css'

import {SessionProvider} from "next-auth/react"

function MyApp({ Component, pageProps }) {
  return <SessionProvider >
    <Component {...pageProps} />
  </SessionProvider>
}

export default MyApp
