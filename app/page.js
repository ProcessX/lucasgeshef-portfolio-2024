import LatestWorkCard from "@/components/latestWorkCard/LatestWorkCard";

export default function Home() {
  return (
    <main>

      <section className="">
        <div className="containerRaw">
          <h1 className="c-font-4xl mt-[160px] tablet:mt-[192px] mb-[88px] tablet:mb-[128px]">
            <span className="block mb-12 tablet:mb-16">Hi.</span>
            <span className="block">I'm a</span>
            <span className="block">graphic designer & dev</span>
            <span className="block">based in Belgium</span>
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
