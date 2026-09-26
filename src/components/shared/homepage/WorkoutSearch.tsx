"use client";

import { useState } from "react";

import WorkoutCard from "@/components/shared/WorkoutCard";
import type { Workout } from "@/types/workout.type";

type WorkoutSearchProps = {
  workouts: Workout[];
};

const WorkoutSearch = ({ workouts }: WorkoutSearchProps) => {
  const [search, setSearch] = useState("");

  const filteredWorkouts = workouts.filter((workout) => {
    const searchText = search.toLowerCase();

    const matchesName = workout.name.toLowerCase().includes(searchText);

    const matchesTag = workout.muscleGroups.some((group) =>
      group.toLowerCase().includes(searchText)
    );

    return matchesName || matchesTag;
  });

  return (
    <div>
      <div className="w-full lg:w-64">
        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search workouts..."
          className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-lime-400"/>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredWorkouts.map((workout) => (

          <WorkoutCard key={workout.id} workout={workout}/>

        ))}
      </div>
    </div>
  );
};

export default WorkoutSearch;