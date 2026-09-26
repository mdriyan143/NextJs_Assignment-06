"use client";

import { Workout } from "@/types/workout.type";
import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface IPlanContext {
  plan: Workout[];
  setPlan: React.Dispatch<React.SetStateAction<Workout[]>>;
  saved: Workout[];
  setSaved: React.Dispatch<React.SetStateAction<Workout[]>>;
  isLoading: boolean;
}

export const PlanContext = createContext<IPlanContext>({
  plan: [],
  setPlan: () => {},
  saved: [],
  setSaved: () => {},
  isLoading: true,
});

const PlanProvider = ({children}: {children: ReactNode}) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const planLoaded = useRef(false);
  const savedLoaded = useRef(false);

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

     setIsLoading(false);

  }, []);

  useEffect(() => {
    if (!planLoaded.current) {
      planLoaded.current = true;
      return;
    }

    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan]);

  useEffect(() => {
    if (!savedLoaded.current) {
      savedLoaded.current = true;
      return;
    }

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
    isLoading,
  };

  return (
    <PlanContext.Provider value={sharedData}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;