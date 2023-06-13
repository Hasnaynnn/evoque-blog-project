import Link from "next/link"
import foodIcon from "../images/food_icon.png"
import scienceIcon from "../images/science_icon.png"
import archiveIcon from "../images/archive_icon.png"

import navStyles from "../styles/navbar.module.css"
import Image from "next/image"
const NavButtons = () => {
  return (
    <div className={navStyles.nav_buttons_bar}>
      <div className={navStyles.nav_buttons}>
        <Link href="/food">
          <Image src={foodIcon} width={35} height={35} alt="food blogs" />
        </Link>
        <Link href="/science">
          <Image src={scienceIcon} width={35} height={35} alt="science blogs" />
        </Link>
        <Link href="/archives">
          <Image src={archiveIcon} width={35} height={35} alt="archives blogs" />
        </Link>
      </div>
    </div>
  )
}

export default NavButtons