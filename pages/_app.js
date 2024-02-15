import '@styles/globals.css'
import 'material-symbols';
import 'animate.css';
import ApplicationProvider from '@hooks/Application';


export default function App({ Component, pageProps }) {
  return(
    <ApplicationProvider>
      <Component {...pageProps} />
    </ApplicationProvider>
  )
}