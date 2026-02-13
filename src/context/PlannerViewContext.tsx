'use client';
import React, { createContext, useContext, useState } from 'react';

type TView = 'live' | 'planner';

type TPlannerViewContext = {
	view: TView;
	setView: (v: TView) => void;
};

const PlannerViewContext = createContext<TPlannerViewContext | undefined>(undefined);

export const PlannerViewProvider = ({ children }: { children: React.ReactNode }) => {
	const [view, setView] = useState<TView>('planner');

	return <PlannerViewContext.Provider value={{ view, setView }}>{children}</PlannerViewContext.Provider>;
};

export const usePlannerView = () => {
	const ctx = useContext(PlannerViewContext);
	if (!ctx) throw new Error('usePlannerView must be used within PlannerViewProvider');
	return ctx;
};

export default PlannerViewContext;
