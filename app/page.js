import LatestWorkCard from "@/components/latestWorkCard/LatestWorkCard";

export default function Home() {
  return (
    <main>

      <section className="">
        <div className="containerRaw">
          <h1 className="c-font-4xl mt-[160px] tablet:mt-[192px] mb-[88px] tablet:mb-[128px] tablet:grid tablet:grid-cols-12">
            <span className="block mb-12 tablet:mb-0 tablet:col-span-2">Hi.</span>
            <span className="block tablet:col-start-3 tablet:col-end-13">I'm a</span>
            <span className="block tablet:col-start-3 tablet:col-end-13">graphic designer & dev</span>
            <span className="block tablet:col-start-3 tablet:col-end-12">based in Belgium</span>
          </h1>
        </div>
        <div className="containerRaw">
          <p className="c-font-base mb-8">My latest work</p>
          <ul>
            <li>
              <div>
                <LatestWorkCard />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
