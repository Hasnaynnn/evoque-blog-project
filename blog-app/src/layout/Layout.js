import Footer from "../components/Footer.jsx"
import Navbar from "../components/Navbar.jsx"

const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        <div>
          {children}
        </div>
      </main>
      {/* <Footer/> */}
    </>
  )
}

export default Layout