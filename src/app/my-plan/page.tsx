"use client";

import { useContext, useState } from "react";
import { toast } from "react-toastify";

import PlanStats from "@/components/myPlan/PlanStats";
import PlanTabs from "@/components/myPlan/PlanTabs";
import PlanListItem from "@/components/myPlan/PlanListItem";
import EmptyState from "@/components/myPlan/EmptyState";
import SortDropdown from "@/components/shared/SortDropdown";

import { PlanContext } from "@/context/PlanContext";

const MyPlanPage = () => {
  const {
    plan,
    setPlan,
    saved,
    setSaved,
  } = useContext(PlanContext);

  const [activeTab, setActiveTab] =
    useState<"plan" | "saved">("plan");

  const [completed, setCompleted] =
    useState<number[]>([]);

  const [sortBy, setSortBy] =
    useState<"duration" | "calories" | "rating">("duration");

  const activeWorkouts = activeTab === "plan" ? plan : saved;

  const totalMinutes = activeWorkouts.reduce(
    (total, workout) =>
      total + workout.duration,
    0
  );

  const totalCalories = activeWorkouts.reduce(
    (total, workout) =>
      total + workout.caloriesBurned,
    0
  );

  const sortedWorkouts = [...activeWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return (
        a.caloriesBurned -
        b.caloriesBurned
      );
    }

    return a.rating - b.rating;
  });

  const handleDone = (id: number) => {
    setCompleted((current) => {
      if (current.includes(id)) {
        return current;
      }

      return [...current, id];
    });

    toast.success("Workout marked as done.");
  };

  const handleRemove = (id: number) => {
    if (activeTab === "plan") {
      setPlan((current) =>
        current.filter(
          (item) => item.id !== id
        )
      );

      toast.success("Workout removed from your plan.");

      return;
    }

    setSaved((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );

    toast.success("Workout removed from saved.");
  };

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-6">
          <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
            My Plan
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            {activeTab === "plan"
              ? "Cap of five lifts for today. Finish them, then load more."
              : "Your saved workouts are ready when you are."}
          </p>
        </div>

        <PlanStats
          exercises={activeWorkouts.length}
          minutes={totalMinutes}
          calories={totalCalories} />

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <PlanTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab} />

          <SortDropdown
            sortBy={sortBy}
            setSortBy={setSortBy} />
        </div>

        {sortedWorkouts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-4">
            {sortedWorkouts.map((workout) => (
              <PlanListItem
                key={workout.id}
                workout={workout}
                isCompleted={completed.includes(workout.id)}
                onDone={handleDone}
                onRemove={handleRemove}
                showDone={activeTab === "plan"} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyPlanPage;