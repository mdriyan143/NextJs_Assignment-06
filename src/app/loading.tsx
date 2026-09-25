import React from 'react';

const Loading = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center bg-zinc-950 text-white">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-zinc-700 border-t-lime-400" />

        <p className="mt-4 text-sm text-zinc-500">
          Loading workouts...
        </p>
      </div>
    </main>
  );
};

export default Loading;