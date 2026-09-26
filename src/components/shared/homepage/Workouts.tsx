import WorkoutLibrary from "@/components/shared/homepage/WorkoutLibrary";
import type { Workout } from "@/types/workout.type";

const getWorkouts = async (): Promise<Workout[]> => {
  try {
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");

    if (!response.ok) {
      throw new Error("Failed to fetch workouts");
    }

    const data: Workout[] = await response.json();

    return data;
  } 
  
  catch (error) {
    console.error("Error fetching workouts:",error);

    return [];
  }
};

const Workouts = async () => {
  const workouts = await getWorkouts();

  return (
    <section
      id="library"
      className="bg-zinc-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-400">
            Workout Library
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl">
            The Library
          </h2>

          <p className="mt-3 text-sm text-zinc-500 sm:text-base">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <WorkoutLibrary
          workouts={workouts}/>

      </div>
    </section>
  );
};

export default Workouts;