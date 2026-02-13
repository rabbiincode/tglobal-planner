'use client';
import React, { createContext, useContext, useState } from 'react';

type TView = 'live' | 'planner';

type TPlannerViewContext = {
  view: TView;
  setView: (v: TView) => void;
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
};

const PlannerViewContext = createContext<TPlannerViewContext | undefined>(
  undefined
);

export const PlannerViewProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [view, setView] = useState<TView>('planner');
  const [currentDate, setCurrentDate] = useState<Date>(new Date());

  return (
    <PlannerViewContext.Provider
      value={{
        view,
        setView,
        currentDate,
        setCurrentDate,
      }}
    >
      {children}
    </PlannerViewContext.Provider>
  );
};

export const usePlannerView = () => {
  const ctx = useContext(PlannerViewContext);
  if (!ctx)
    throw new Error(
      'usePlannerView must be used within PlannerViewProvider'
    );
  return ctx;
};

export default PlannerViewContext;
