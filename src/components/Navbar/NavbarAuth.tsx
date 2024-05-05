import { HamburgerMenu } from "./HamburgerMenu"
import useHamburgerMenu from "../../store/useHamburgerMenu"
import { useModalsStore } from "../../store/modalsStore"

import { AiOutlineMenu } from "react-icons/ai"

export function NavbarAuth() {
  const hamburgerMenu = useHamburgerMenu()

  const { openModal } = useModalsStore()

  return (
    <>
      <div className="navbar-auth">
        <span>
          <a className="link" onClick={() => openModal("ModalAuth")}>
            Log In / Registration
          </a>
        </span>
        <div className="line" />
        <span>
          <a className="link" onClick={() => openModal("ModalBookTable")}>
            Book Table
          </a>
        </span>
        <div className="line" />
        <span>
          <a className="link" onClick={() => openModal("ModalMenu")}>
            Delivery
          </a>
        </span>
      </div>

      <AiOutlineMenu className="cursor-pointer" size={20} onClick={hamburgerMenu.onOpen} />

      {hamburgerMenu.isOpen && <HamburgerMenu />}
    </>
  )
}
