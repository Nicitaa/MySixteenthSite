import { FaTelegramPlane } from "react-icons/fa"
import { BsDiscord } from "react-icons/bs"

export function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center pt-96 4K:pt-64 LaptopL:pt-32">
      <h1 className="title">Contact</h1>
      <p className="subTitle mb-4">Sudenkaari 47, 02580 Siuntio</p>
      <ul>
        <li className="subTitle flex flex-row gap-2 items-center justify-center">
          <a className="hover:text-[--cta]" href="https://t.me/BF_GO" target="_blank">
            Telegram
          </a>
          <FaTelegramPlane />
        </li>
        <li className="subTitle flex flex-row gap-2 items-center justify-center">
          <a className="hover:text-[--cta]" href="https://discord.com/users/284449949893001227" target="_blank">
            Discord
          </a>
          <BsDiscord />
        </li>
      </ul>
    </div>
  )
}
