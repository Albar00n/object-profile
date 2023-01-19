import '../styles/globals.css'
import Script from "next/script";

export default function App({ Component, pageProps }) {
   return(

     <>

     <Component {...pageProps} /><Script
      type="module"
      src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></Script>
      </>

  )
}
