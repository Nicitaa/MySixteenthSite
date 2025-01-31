import "./photoGallery.css"

import { Button } from "../../../components"
import { gallerey } from "../../../constant"
import { motion } from "framer-motion"
import { useSlider } from "../../../hooks/useSlider"

export function PhotoGallerey() {
  const { handleMouseMove, handleTouchMove, handleMouseDown, handleTouchDown } = useSlider()
  return (
    <div
      className="flex py-32 relative bg-[url('./pages/bg-secondary.avif')] bg-cover
Tablet:flex-col Tablet:items-center Tablet:text-center Tablet:gap-y-8
MobileL:gap-y-8"
    >
      <div
        className="section-container pl-32 pr-16 flex flex-col justify-center items-start max-w-[30%]
  4K:px-16
  Tablet:items-center Tablet:px-0"
      >
        <h6 className="preTitle leading-[1.6rem]">Awards & Recognition</h6>
        <svg className="spoon-svg">
          <use xlinkHref="./pages/home/sprite.svg#spoon" />
        </svg>
        <h1 className="title inline-block">Photo Gallery</h1>
        <p className="subTitle mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, assumenda?</p>
        <Button label="View more" />
      </div>
      <div
        className="flex gap-x-16 h-[60vh] max-w-[70%] overflow-hidden
  4K:gap-x-8
  LaptopL:gap-x-4
  Tablet:max-w-[90%] Tablet:ml-[10%]"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchDown}
        style={{ touchAction: "none", overflow: "hidden" }}
      >
        {gallerey.map((gallerey) => (
          <div className="relative overflow-hidden image-container select-none" key={gallerey.imgSrc}>
            <svg
              className="absolute opacity-0 cursor-pointer scale-90 transition-all duration-500 z-10
        gallery-svg
        "
            >
              <use xlinkHref="./pages/home/sprite.svg#instagram" />
            </svg>
            <img
              className="object-cover w-full transition-all duration-500 pointer-events-none
      hover:brightness-75 gallery-img"
              src={gallerey.imgSrc}
              key={gallerey.imgSrc}
            />
          </div>
        ))}
        <motion.a
          className="inline-flex relative items-center mx-12 text-center font-bold cursor-pointer select-none outline-0 z-0
    gallery-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View More...
        </motion.a>
      </div>
    </div>
  )
}
