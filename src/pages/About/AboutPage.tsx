export function AboutPage() {
  return (
    <div
      className="min-h-[80vh] flex justify-center items-center
    px-32 4K:px-28 LaptopL:px-16"
    >
      <div className="mt-32 flex flex-col justify-center">
        <h1 className="preTitle mb-4">
          This is additional information to portfolio{" "}
          <a className="text-blue-400" onClick={() => window.open("https://nicitaa.com")}>
            nicitaa.com
          </a>
        </h1>
        <div className="subTitle flex flex-col gap-2">
          <span className="preTitle">I'm Frontend web developer</span>
          <span className="flex flex-row gap-2">
            <img className="w-16 h-16 4K:w-10 4K:h-10 LaptopL:w-6 LaptopL:h-6" src="/pages/about/7.svg" />
            - You become any website on your taste
            <br />
          </span>
          <span className="flex flex-row gap-2">
            <img className="w-16 h-16 4K:w-10 4K:h-10 LaptopL:w-6 LaptopL:h-6" src="/pages/about/conversion.png" />
            - You become site with high conversion rate
            <br />
          </span>
          <span className="flex flex-row gap-2 items-start">
            <img
              className="w-16 h-16 4K:w-10 4K:h-10 LaptopL:w-6 LaptopL:h-6 mt-1 Tablet:mt-0"
              src="/pages/about/quality.png"
              alt="Quality"
            />
            <div>
              <p className="font-medium">- High-quality websites because:</p>
              <ul className="text-xs pl-10 list-disc ">
                <li className="text-[22px]">Best practices like DRY SOLID KISS</li>
                <li className="text-[22px]">High performance compared to UX</li>
                <li className="text-[22px]">
                  SEO optimization (404 / Opengraph image / Next.js and Redis cache / SSG SSR ISR / Optimized images)
                </li>
                <li className="text-[22px]">Documentation + architecture (if required for scalability)</li>
              </ul>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}
