const avatarJenny = "https://www.figma.com/api/mcp/asset/5646908c-494b-4e5e-99ae-31934850e51e";
const quoteIcon = "https://www.figma.com/api/mcp/asset/7add89b9-8d47-4b85-a56c-8cb3a9ea5e08";
const arrowLeft = "https://www.figma.com/api/mcp/asset/babc53d2-5832-4c22-9354-73ddfc3faa46";
const arrowRight = "https://www.figma.com/api/mcp/asset/46288e83-5718-4e80-912e-e21f0a7a5629";
const logoIntel = "https://www.figma.com/api/mcp/asset/937514c4-5bb0-44ae-878e-5d8570f75107";
const logoOracle = "https://www.figma.com/api/mcp/asset/cc16b87b-e05f-4c57-a1fa-943def3dd08d";
const logoDell = "https://www.figma.com/api/mcp/asset/366a5931-e663-4a8f-b568-752d86989730";
const logoSamsung = "https://www.figma.com/api/mcp/asset/a877ffe4-5f45-41c8-bdcc-403cda37133b";
const logoInfosys = "https://www.figma.com/api/mcp/asset/5ae8201a-c52c-4f71-83f9-1c78312e5244";
const logoCapgemini = "https://www.figma.com/api/mcp/asset/a30c36e3-d726-403d-9a06-ad5057a47840";

export function Testimonials() {
  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Testimonial row */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left: heading + nav */}
          <div className="flex flex-col gap-8 lg:w-72 flex-shrink-0">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl font-bold text-text-default">What our users think.</h2>
              <p className="text-text-secondary text-base">Pellentesque varius semper odio non pretium.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-50 transition-colors" aria-label="Previous">
                <img src={arrowLeft} alt="" className="w-4 h-4" />
              </button>
              <span className="text-sm text-text-secondary">1 / 5</span>
              <button className="w-9 h-9 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-50 transition-colors" aria-label="Next">
                <img src={arrowRight} alt="" className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right: quote */}
          <div className="flex flex-col gap-6 flex-1">
            <p className="text-text-default text-xl leading-relaxed font-medium">
              "Every feature designed to solve real problems in industrial procurement and vendor relationships."
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={avatarJenny} alt="Jenny Wilson" className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-text-default">Jenny Wilson</p>
                  <p className="text-xs text-text-secondary">CEO &amp; Head of Comp Inc.</p>
                </div>
              </div>
              <img src={quoteIcon} alt="" className="w-10 h-10 opacity-60" />
            </div>
          </div>
        </div>

        <hr className="border-neutral-200" />

        {/* Trusted by */}
        <div className="flex flex-col items-center gap-6 text-center">
          <div>
            <h2 className="text-xl font-bold text-text-default">Trusted by</h2>
            <p className="text-sm text-text-secondary mt-1">
              Our robust analytics offer rich insights into the information buyers want, informing where teams
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <img src={logoIntel} alt="Intel" style={{ height: "32px" }} />
            <img src={logoOracle} alt="Oracle" style={{ height: "18px" }} />
            <img src={logoDell} alt="Dell" style={{ height: "36px" }} />
            <img src={logoSamsung} alt="Samsung" style={{ height: "20px" }} />
            <img src={logoInfosys} alt="Infosys" style={{ height: "32px" }} />
            <img src={logoCapgemini} alt="Capgemini" style={{ height: "36px" }} />
          </div>
        </div>

        <hr className="border-neutral-200 max-w-xs mx-auto w-full" />
      </div>
    </section>
  );
}
