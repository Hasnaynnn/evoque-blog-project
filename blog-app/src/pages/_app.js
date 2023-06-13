import '../styles/globals.css'
import '../styles/components.module.css'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import("../layout/Layout"))

export default function App({ Component, pageProps: { session, ...pageProps }, }) {
  return (
    // <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    // </SessionProvider>
  )
}
