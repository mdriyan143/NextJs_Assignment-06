"use client";

import { useState } from "react";

import WorkoutCard from "@/components/shared/WorkoutCard";
import LibrarySortDropdown from "@/components/shared/homepage/LibrarySortDropdown";

import type { Workout } from "@/types/workout.type";

type SortValue = "duration" | "calories" | "rating";

type WorkoutLibraryProps = {
  workouts: Workout[];
};

const WorkoutLibrary = ({
  workouts,
}: WorkoutLibraryProps) => {
  const [search, setSearch] = useState("");

  const [sortBy, setSortBy] =
    useState<SortValue>("duration");

  const filteredWorkouts = workouts.filter((workout) => {
    const searchText = search.toLowerCase();

    const matchesName = workout.name
      .toLowerCase()
      .includes(searchText);

    const matchesTag = workout.muscleGroups.some((group) =>
      group.toLowerCase().includes(searchText)
    );

    return matchesName || matchesTag;
  });

  const sortedWorkouts = [...filteredWorkouts].sort(
    (a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return a.rating - b.rating;
    }
  );

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <input type="text" value={search}
          onChange={(event) =>
            setSearch(event.target.value)}
            
          placeholder="Search workouts or muscle groups..."
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-lime-400 sm:w-72"/>

        <LibrarySortDropdown sortBy={sortBy} setSortBy={setSortBy}/>

      </div>

      {sortedWorkouts.length === 0 ? (
        <p className="text-center text-sm text-zinc-500">
          No workouts found.
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedWorkouts.map((workout) => (

            <WorkoutCard key={workout.id} workout={workout}/>

          ))}
        </div>
      )}
    </div>
  );
};

export default WorkoutLibrary;