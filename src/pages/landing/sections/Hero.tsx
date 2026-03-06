import { Link } from "react-router-dom";
import { Illustration } from "../../../components/Illustration";

export function Hero() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex flex-col gap-8 flex-1 max-w-xl">
          <div className="flex flex-col gap-5">
            <h1 className="text-5xl lg:text-6xl font-bold text-text-default leading-tight">
              Source Industrial
              <br />
              Automation with{" "}
              <span className="text-sky-brand-500">Confidence</span>
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              The vetted B2B marketplace where buyers and sellers of instrumentation and programming services connect anonymously — with trust built in.
            </p>
          </div>
          {/* "Create Project" takes buyer to registration with buyer pre-selected */}
          <Link
            to="/register?from=create-project"
            className="inline-flex items-center justify-center self-start px-6 py-3 rounded-full bg-sky-brand-500 text-white text-sm font-semibold shadow-xs hover:bg-sky-brand-600 active:bg-sky-brand-800 transition-colors"
          >
            Create Project
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Illustration variant="1" alt="Industrial automation illustration" className="w-full max-w-lg" />
        </div>
      </div>
    </section>
  );
}
