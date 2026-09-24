import React from 'react';

const WorkoutActions = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <button
        type="button"
        className="rounded-md bg-lime-400 px-5 py-3 text-sm font-semibold text-black"
      >
        Add to today&apos;s plan
      </button>

      <button
        type="button"
        className="rounded-md border border-zinc-700 px-5 py-3 text-sm font-semibold text-white"
      >
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;