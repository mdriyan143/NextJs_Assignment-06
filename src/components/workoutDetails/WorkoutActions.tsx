"use client";

import { useContext } from "react";
import { toast } from "react-toastify";
import { PlanContext } from "@/context/PlanContext";
import type { Workout } from "@/types/workout.type";
import { CiBookmark } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";


type WorkoutActionsProps = {
  workout: Workout;
};

const WorkoutActions = ({ workout }: WorkoutActionsProps) => {
  const {
    plan,
    setPlan,
    saved,
    setSaved,
  } = useContext(PlanContext);

  const isAlreadyAdded = plan.some(
    (item) => item.id === workout.id
  );

  const isPlanFull = plan.length >= 5;

  const handleAddToPlan = () => {
    if (isAlreadyAdded) {
      toast.info("Workout is already in your plan.");
      return;
    }

    if (isPlanFull) {
      toast.info("You can add up to 5 workouts to today's plan.");
      return;
    }

    setPlan([...plan, workout]);

    toast.success(`${workout.name} workout added to your plan.`);
  };

  const handleSave = () => {
    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      toast.info("Workout is already saved.");
      return;
    }

    setSaved([...saved, workout]);

    toast.success(`${workout.name} workout saved for later.`);
  };

  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={isAlreadyAdded || isPlanFull}
        className="flex cursor-pointer items-center gap-3 rounded-2xl bg-lime-400 px-6 py-4 text-sm font-semibold text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50">
        <FaRegCalendar size={20} />

        <span>
          {isAlreadyAdded ? "Already in plan" : isPlanFull
              ? "Plan is full" : "Add to today's plan"}
        </span>
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="flex cursor-pointer items-center gap-3 rounded-2xl border border-zinc-700 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-900">
        <CiBookmark size={18} />
        <span>Save for later</span>
      </button>


    </div>
  );
};

export default WorkoutActions;