const avatar1 = "https://www.figma.com/api/mcp/asset/a377645c-bf2c-414f-9caf-11a5acd099f6";
const avatar2 = "https://www.figma.com/api/mcp/asset/d6f58969-8804-4396-b07a-13ced6a873fa";

export function CtaBanner() {
  return (
    <div className="bg-sky-brand-50 border-y border-sky-brand-100 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center gap-4 justify-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-3">
            <img src={avatar1} alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            <img src={avatar2} alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
          </div>
          <p className="text-text-default text-sm font-medium max-w-xs">
            Save valuable time and effort spent searching for a solution.
          </p>
        </div>
        <button className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 transition-colors flex-shrink-0">
          Contact us now
        </button>
      </div>
    </div>
  );
}
