"use client";
import React, { createContext, useContext, useState } from "react";
import { TEvent } from "@/lib/planner/types"; // make sure the path is correct
import { PLANNER_EVENTS } from "@/lib/planner/constants";

type TView = "live" | "planner";

type TPlannerViewContext = {
  view: TView;
  setView: (v: TView) => void;
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  events: TEvent[];
  setEvents: React.Dispatch<React.SetStateAction<TEvent[]>>;
};

const PlannerViewContext = createContext<TPlannerViewContext | undefined>(
  undefined
);

export const PlannerViewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [view, setView] = useState<TView>("planner");
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<TEvent[]>(PLANNER_EVENTS);

  return (
    <PlannerViewContext.Provider
      value={{ view, setView, currentDate, setCurrentDate, events, setEvents }}
    >
      {children}
    </PlannerViewContext.Provider>
  );
};

export const usePlannerView = () => {
  const ctx = useContext(PlannerViewContext);
  if (!ctx)
    throw new Error("usePlannerView must be used within PlannerViewProvider");
  return ctx;
};

export default PlannerViewContext;
