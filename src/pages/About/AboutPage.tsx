export function AboutPage() {
  return (
    <div
      className="min-h-[80vh] flex justify-center items-center
    px-32 4K:px-28 LaptopL:px-16"
    >
      <div className="mt-32 flex flex-col justify-center">
        <h1 className="preTitle mb-4">
          Discover the story behind
          <a className="text-blue-400">Mikke restaurant</a>
        </h1>
        <div className="subTitle flex flex-col gap-2">
          <span className="preTitle">Authentic flavors, unforgettable experiences</span>
          <span className="flex flex-row gap-2">
            <img className="w-16 h-16 4K:w-10 4K:h-10 LaptopL:w-6 LaptopL:h-6" src="/pages/about/chef.svg" />
            - Our chefs craft dishes with fresh, locally sourced ingredients
            <br />
          </span>
          <span className="flex flex-row gap-2">
            <img className="w-16 h-16 4K:w-10 4K:h-10 LaptopL:w-6 LaptopL:h-6" src="/pages/about/dining.png" />
            - A cozy ambiance perfect for family gatherings and romantic dinners
            <br />
          </span>
          <span className="flex flex-row gap-2 items-start">
            <img
              className="w-16 h-16 4K:w-10 4K:h-10 LaptopL:w-6 LaptopL:h-6 mt-1 Tablet:mt-0"
              src="/pages/about/quality.png"
              alt="Quality"
            />
            <div>
              <p className="font-medium">- Why choose us?</p>
              <ul className="text-xs pl-10 list-disc ">
                <li className="text-[22px]">Authentic recipes passed down through generations</li>
                <li className="text-[22px]">Exceptional customer service and hospitality</li>
                <li className="text-[22px]">Fresh and organic ingredients for every dish</li>
                <li className="text-[22px]">An extensive menu catering to all tastes and preferences</li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}
