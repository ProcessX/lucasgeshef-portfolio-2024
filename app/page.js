import LatestWorkCard from "@/components/latestWorkCard/LatestWorkCard";

export default function Home() {
  return (
    <main>

      <section className="min-h-[100vh] section--home laptop:flex laptop:flex-col laptop:justify-between">
        <div className="containerRaw pt-[160px] tablet:pt-[160px] laptop:w-full">
          <h1 className="c-font-4xl mb-[88px] tablet:mb-[128px] tablet:grid tablet:grid-cols-12 laptop:mb-0">
            <span className="block mb-12 tablet:mb-0 tablet:col-span-2">Hi.</span>
            <span className="block tablet:col-start-3 tablet:col-end-13">I'm a</span>
            <span className="block tablet:col-start-3 tablet:col-end-13">graphic designer & dev</span>
            <span className="block tablet:col-start-3 tablet:col-end-12">based in Belgium</span>
          </h1>
        </div>
        <div className="containerRaw laptop:w-full laptop:mb-0">
          <div className="laptop:grid laptop:grid-cols-12">
            <p className="c-font-base mb-8 laptop:col-span-2 laptop:mb-[64px] laptop:self-end">My latest work</p>
            <ul className="laptop:col-span-10 laptop:flex">
              <li className="w-full">
                <div>
                  <LatestWorkCard />
                </div>
              </li>
              <li className="w-full">
                <div>
                  <LatestWorkCard />
                </div>
              </li>
              <li className="w-full">
                <div>
                  <LatestWorkCard />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main >
  );
}
