"use client";

import { useContext } from "react";
import { PlanContext } from "@/context/PlanContext";
import type { Workout } from "@/types/workout.type";

type WorkoutActionsProps = {
  workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const { plan, setPlan, saved, setSaved } = useContext(PlanContext);

  const handleAddToPlan = () => {
    const alreadyAdded = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      return;
    }

    setPlan([...plan, workout]);
  };

  const handleSave = () => {
    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      return;
    }

    setSaved([...saved, workout]);
  };

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        type="button"
        onClick={handleAddToPlan}
        className="cursor-pointer rounded-md bg-lime-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-lime-300">
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="cursor-pointer rounded-md border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-900">
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;