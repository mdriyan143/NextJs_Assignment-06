"use client";
import { Workout } from "@/types/workout.type";
import React, { createContext, ReactNode, useState } from "react";

interface IPlanContext {
  plan: Workout[];
  setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  saved: Workout[];
  setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;
}

export const PlanContext = createContext<IPlanContext>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
});

const PlanProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  const sharedData = {
    plan,
    setPlan,
    saved,
    setSaved,
  };

  return (
    <PlanContext.Provider value={sharedData}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;