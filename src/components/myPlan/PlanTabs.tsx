type PlanTabsProps = {
  activeTab: "plan" | "saved";
  setActiveTab: (tab: "plan" | "saved") => void;
};

const PlanTabs = ({
  activeTab,
  setActiveTab}: PlanTabsProps) => {
  return (
    <div className="flex w-fit rounded-xl border border-zinc-800 bg-zinc-900/80 p-1">
      <button
        type="button"
        onClick={() => setActiveTab("plan")}
        className={`rounded-md px-5 py-2 text-xs font-semibold transition ${
          activeTab === "plan"
            ? "bg-zinc-800 text-white shadow-sm"
            : "text-zinc-500 hover:text-white"}`}>
        Today&apos;s Plan
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("saved")}
        className={`rounded-md px-5 py-2 text-xs font-semibold transition ${
          activeTab === "saved"
            ? "bg-zinc-800 text-white shadow-sm"
            : "text-zinc-500 hover:text-white"}`}>
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;