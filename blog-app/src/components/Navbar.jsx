import Link from "next/link"
import navStyles from "../styles/navbar.module.css"
import { motion } from "framer-motion"
import Logo from "./Logo"
import { useRouter } from "next/router"
const Navbar = () => {
  const router = useRouter()
  let pathname = router.pathname.substring(1, router.pathname.length)
  return (
    <motion.nav
      className={navStyles.nav}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1 }}
      whileTap={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 210,
        damping: 20,
        // delay: 0.5,
      }}
    >
      <Logo />
      <div className={navStyles.nav_links}>
        <Link href="/physical">
          <p>Physical</p>
        </Link>
        <Link href="/mental">
          <p>Mental</p>
        </Link>
        <Link href="/nutritional">
          <p>Nutritional</p>
        </Link>
        <Link href="/shop">
          <p>Shop</p>
        </Link>
      </div>
    </motion.nav>
  )
}

export default Navbar