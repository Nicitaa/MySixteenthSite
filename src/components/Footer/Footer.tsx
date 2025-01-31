import "./footer.css"

import { FaTelegramPlane } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"

export function Footer() {
  return (
    <div className="footer">
      <div className="footer-bottom footerTop">
        <p className="subTitle">2021 Gericht. All Rights reserved.</p>
      </div>

      <div className="footer-top">
        <div className="footer-top_info">
          <h1 className="footer-title">Contact us</h1>
          <p className="footer-subTitle">Sudenkaari 47, 02580 Siuntio</p>
          <ul className="footer-subTitle">
            <li>
              <a href="tel:+3584573992670">+3584573992670</a>
            </li>
            <li className="flex flex-row gap-2 items-center justify-center">
              <a className="hover:text-[--cta]" href="https://t.me/BF_GO" target="_blank">
                Telegram
              </a>
              <FaTelegramPlane />
            </li>
            <li className="flex flex-row gap-2 items-center justify-center">
              <a className="hover:text-[--cta]" href="https://discord.com/users/284449949893001227" target="_blank">
                Discord
              </a>
              <BsDiscord />
            </li>
          </ul>
        </div>

        <div className="footer-top_center">
          <h1 className="footer-logo-text">Gericht</h1>

          <p className="footer-description">
            "The best way to find yourself is to lose yourself in the service of others."
          </p>

          <svg className="spoon-svg mb-[0.8rem]">
            <use xlinkHref="./pages/home/sprite.svg#spoon" />
          </svg>

          <div className="socials">
            <svg className="social-svg">
              <use xlinkHref="./pages/home/sprite.svg#facebook" />
            </svg>

            <svg className="social-svg">
              <use xlinkHref="./pages/home/sprite.svg#twitter" />
            </svg>

            <svg className="social-svg">
              <use xlinkHref="./pages/home/sprite.svg#instagram" />
            </svg>
          </div>
        </div>

        <div className="footer-top_info">
          <h1 className="footer-title">Working Hours</h1>
          <p className="footer-subTitle">
            Monday-Friday
            <br />
            08:00 am - 12:00 am
          </p>
          <p className="footer-subTitle">
            Saturday-Sunday
            <br />
            07:00 am - 11:00 am
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="subTitle">2021 Gericht. All Rights reserved.</p>
      </div>
    </div>
  )
}
