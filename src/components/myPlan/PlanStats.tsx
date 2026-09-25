type PlanStatsProps = {
  exercises: number;
  minutes: number;
  calories: number;
};

const PlanStats = ({
  exercises,
  minutes,
  calories }: PlanStatsProps) => {
  return (
    <div className="mb-8 grid overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 sm:grid-cols-3">
      <div className="border-b border-zinc-800 p-6 sm:border-b-0 sm:border-r">
        <p className="text-xs text-zinc-500">
          Exercises
        </p>

        <p className="mt-2 text-4xl font-black text-lime-400">
          {exercises}
        </p>
      </div>

      <div className="border-b border-zinc-800 p-6 sm:border-b-0 sm:border-r">
        <p className="text-xs text-zinc-500">
          Minutes
        </p>

        <p className="mt-2 text-4xl font-black text-white">
          {minutes}
        </p>
      </div>

      <div className="p-6">
        <p className="text-xs text-zinc-500">
          Calories
        </p>

        <p className="mt-2 text-4xl font-black text-white">
          {calories}
        </p>
      </div>
    </div>
  );
};

export default PlanStats;