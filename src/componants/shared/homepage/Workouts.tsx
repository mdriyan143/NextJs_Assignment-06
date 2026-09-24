import React from 'react';
import type { Workout } from "@/types/workout.type";

const getWorkouts = async (): Promise<Workout[]> => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!response.ok) {
      throw new Error("Failed to fetch workouts");
    }

    const data: Workout[] = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching workouts:", error);

    return [];
  }
};

const Workouts = async () => {
  const workouts = await getWorkouts();

  return (
    <section>
      <h2>Workouts</h2>

      <p>Total workouts: {workouts.length}</p>
    </section>
  );
};

export default Workouts;