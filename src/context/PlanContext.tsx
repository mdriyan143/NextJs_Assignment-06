"use client";

import { Workout } from "@/types/workout.type";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

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

const PlanProvider = ({ children }: {children: ReactNode }) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  
  useEffect(() => {
    const savedPlan = localStorage.getItem("fitlog-plan");
    const savedWorkouts =
      localStorage.getItem("fitlog-saved");

    if (savedPlan) {
      setPlan(JSON.parse(savedPlan));
    }

    if (savedWorkouts) {
      setSaved(JSON.parse(savedWorkouts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan]);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved]);

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